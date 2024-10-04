sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/UIComponent",
        "sap/ui/model/json/JSONModel",
    ],
    function(BaseController,UIComponent,JSONModel) {
      "use strict";
      let ai;
      return BaseController.extend("kpo.com.supplierrecommendation.controller.View2", {
        onInit: function() {
          let oAIModel = new JSONModel();
          this.getView().setModel(oAIModel,"oAIModel")
          var oRouter = this.getRouter();
          oRouter.getRoute("RouteView2").attachMatched(this._onRouteMatched, this);
        },
        _onRouteMatched:function(oEvent){
         
          let odata = oEvent.getParameters().arguments.itemdescription;
          ai=odata;
          this.fetchApiData(ai);
          console.log("hi",ai)
        },
        onReviewRFP: function(){
            this.getOwnerComponent().getRouter().navTo("RouteView3");
        },
        getRouter: function () {
          return UIComponent.getRouterFor(this);
      },
      fetchAIRecommendations:function(aDesList){
        let oDataModel = this.getOwnerComponent().getModel();
        let oAIModel = this.getView().getModel("oAIModel");

        let oPayload = {
          description:aDesList[0]

        }

        oDataModel.create("/GetAiSupplier",oPayload,{
          success:function(oRes){
            oAIModel.setData(oRes.results);
          },
          error:function(oerror){

          }
        })



      },
      formatPercentage: function (value) {
        if (value) {
            return value * 100;
        }
        return 0;
    },
    fetchApiData: function (aDescriptions) {
      debugger;
      var that = this;
  
      // If aDescriptions is a stringified array, parse it into a real array
      if (typeof aDescriptions === 'string') {
        // Converts the string to an actual array
          aDescriptions = JSON.parse(aDescriptions); 
      }
  
      const oModel = this.getOwnerComponent().getModel();
      let combinedResults = []; // To store all the results
  
      // Loop through each description and make the API call
      aDescriptions.forEach(function (description, index) {
          const oActionDataContext = oModel.bindContext("/GetAiSupplier(...)");
          oActionDataContext.setParameter("description", description);
  
          // Execute the action for each description
          oActionDataContext.execute().then(function (oResponse) {
              const oActionContext = oActionDataContext.getBoundContext();
              const oObject = oActionContext.getObject().value;
  
              // Parse the response object
              const parsedObject = JSON.parse(oObject);
              console.log("Data for description:", description, parsedObject);
  
              // Extract results from each API response and combine them
              const results = parsedObject.predictions[0].labels[0].results;
              combinedResults = combinedResults.concat(results); // Combine results into one array
  
              // Once all requests are completed, set the combined data to the model
              if (index === aDescriptions.length - 1) {
                  const combinedObject = {
                      id: parsedObject.id, // Use the id from the first response
                      predictions: [{
                          labels: [{
                              name: "level1_category",
                              results: combinedResults
                          }]
                      }],
                      objectId: parsedObject.predictions[0].objectId,
                      processedTime: parsedObject.processedTime,
                      status: parsedObject.status
                  };
  
                  // Set the combined object as the model
                  var oAribaData = new JSONModel(combinedObject);
                  that.getView().setModel(oAribaData, "aribaModel");
                  console.log("Combined data received", that.getView().getModel("aribaModel").getData());
              }
  
          }).catch(function (oError) {
              console.error("Error fetching data for description:", description, oError);
          });
      });
  }
  
  
      });
    }
  );
  