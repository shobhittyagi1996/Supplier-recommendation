sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("kpo.com.supplierrecommendation.controller.View1", {
        onInit: function () {
            // JSON data as described above
            var oData =
                [
                    { "demandid": "6000000001", "itemid": "10", "demandtitle": "", "itemdescription": "Pipes and Tubular Goods", "itemcategory": "Material", "quantity": 10, "uom": "EA", "createddate": "", "createdby": "" },
                    { "demandid": "6000000002", "itemid": "11", "demandtitle": "", "itemdescription": "Valves", "itemcategory": "Material", "quantity": 10, "uom": "EA", "createddate": "", "createdby": "" },
                    { "demandid": "6000000003", "itemid": "12", "demandtitle": "", "itemdescription": "Flanges", "itemcategory": "Material", "quantity": 10, "uom": "EA", "createddate": "", "createdby": "" },
                    { "demandid": "6000000004", "itemid": "13", "demandtitle": "", "itemdescription": "Fittings", "itemcategory": "Material", "quantity": 10, "uom": "EA", "createddate": "", "createdby": "" },
                    { "demandid": "6000000005", "itemid": "14", "demandtitle": "", "itemdescription": "Pumps", "itemcategory": "Material", "quantity": 10, "uom": "EA", "createddate": "", "createdby": "" },
                    { "demandid": "6000000006", "itemid": "15", "demandtitle": "", "itemdescription": "Compressors", "itemcategory": "Material", "quantity": 10, "uom": "EA", "createddate": "", "createdby": "" },
                    { "demandid": "6000000007", "itemid": "16", "demandtitle": "", "itemdescription": "Heat Exchangers", "itemcategory": "Material", "quantity": 10, "uom": "EA", "createddate": "", "createdby": "" },
                    { "demandid": "6000000008", "itemid": "17", "demandtitle": "", "itemdescription": "Storage Tanks", "itemcategory": "Material", "quantity": 10, "uom": "EA", "createddate": "", "createdby": "" },
                    { "demandid": "6000000009", "itemid": "18", "demandtitle": "", "itemdescription": "Separators", "itemcategory": "Material", "quantity": 10, "uom": "EA", "createddate": "", "createdby": "" }
                ]


            // Create a new JSON model with the data
            var oModel = new JSONModel(oData);

            // Set the model to the view
            this.getView().setModel(oModel, "myModel");
        },
        onCreateRFP:function(){
            this.getOwnerComponent().getRouter().navTo("RouteView2");
        }
    });
});
