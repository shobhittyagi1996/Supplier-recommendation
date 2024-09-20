sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/UIComponent",
        "sap/ui/model/json/JSONModel",
    ],
    function(BaseController,UIComponent,JSONModel) {
      "use strict";
  
      return BaseController.extend("kpo.com.supplierrecommendation.controller.View2", {
        onInit: function() {
          let oAIModel = new JSONModel();
          this.getView().setModel(oAIModel,"oAIModel")
          var oRouter = this.getRouter();
          oRouter.getRoute("RouteView2").attachMatched(this._onRouteMatched, this);
        },
        _onRouteMatched:function(oEvent){
          let odata = this.getOwnerComponent().getModel("localModel").getData();
          console.warn(odata)
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



      }
      });
    }
  );
  