sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend(
      "kpo.com.supplierrecommendation.controller.View1",
      {
        onInit: function () {
          
          // JSON data as described above
          var oData = [
            {
              demandid: "6000000001",
              itemid: "10",
              demandtitle: "Procurement of Drilling Machinery, Mud Equipment and Ac",
              itemdescription: "Drilling Machinery and Mud Equipment AC",
              itemcategory: "Material",
              quantity: 10,
              uom: "EA",
              createddate: "",
              createdby: "",
            },
            {
              demandid: "6000000001",
              itemid: "11",
              demandtitle: "Procurement of Production Surface Equipment and Accesso",
              itemdescription: "Production Surface Equipment and Accesso",
              itemcategory: "Material",
              quantity: 10,
              uom: "EA",
              createddate: "",
              createdby: "",
            },
            {
              demandid: "6000000001",
              itemid: "12",
              demandtitle: "Procurement of Drill Bit",
              itemdescription: "Drill Bit",
              itemcategory: "Material",
              quantity: 10,
              uom: "EA",
              createddate: "",
              createdby: "",
            },
            {
              demandid: "6000000001",
              itemid: "13",
              demandtitle: "Procurement of Wireline Equipment and Accessorie",
              itemdescription: "Wireline Equipment and Accessorie",
              itemcategory: "Material",
              quantity: 10,
              uom: "EA",
              createddate: "",
              createdby: "",
            },
            {
              demandid: "6000000002",
              itemid: "14",
              demandtitle: "Procurement of Screw Pumps",
              itemdescription: "Screw Pumps",
              itemcategory: "Material",
              quantity: 10,
              uom: "EA",
              createddate: "",
              createdby: "",
            },
            {
              demandid: "6000000002",
              itemid: "15",
              demandtitle: "Procurement of Submersible Pumps",
              itemdescription: "Submersible Pumps",
              itemcategory: "Material",
              quantity: 10,
              uom: "EA",
              createddate: "",
              createdby: "",
            },
            {
              demandid: "6000000003",
              itemid: "16",
              demandtitle: "Procurement of Heat Exchangers",
              itemdescription: "Heat Exchangers",
              itemcategory: "Material",
              quantity: 10,
              uom: "EA",
              createddate: "",
              createdby: "",
            },
            {
              demandid: "6000000003",
              itemid: "17",
              demandtitle: "Procurement of Plate Heat Exchangers",
              itemdescription: "Plate Heat Exchangers",
              itemcategory: "Material",
              quantity: 10,
              uom: "EA",
              createddate: "",
              createdby: "",
            },
            {
              demandid: "6000000003",
              itemid: "18",
              demandtitle: "Waste Heat Recovery Units",
              itemdescription: "Waste Heat Recovery Units",
              itemcategory: "Material",
              quantity: 10,
              uom: "EA",
              createddate: "",
              createdby: "",
            },
          ];

          // Create a new JSON model with the data
          var oModel = new JSONModel(oData);

          // Set the model to the view
          this.getView().setModel(oModel, "myModel");
        },

        onCreateRFP: function () {
          debugger;
          let aContexts = this.byId("id_Table4").getSelectedContexts();
          if (aContexts.length > 0) {
              // Collect all selected item descriptions
              let aSelectedTexts = aContexts.map(function(item) {
                  return item.getObject().itemdescription;
              });
      
              // Store the selected descriptions in the local model
              this.getOwnerComponent().getModel("localModel").setData({
                  selectedDescriptions: aSelectedTexts
              });
      
              // Navigate to RouteView2 and pass the descriptions as a parameter (array as JSON string)
              this.getOwnerComponent().getRouter().navTo("RouteView2", {
                  "itemdescription": JSON.stringify(aSelectedTexts) // Pass as stringified array
              });
          } else {
              return;
          }
      }
      
        
        
      }
      
    );
  }
);
