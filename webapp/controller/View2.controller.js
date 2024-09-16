sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("kpo.com.supplierrecommendation.controller.View2", {
        onInit: function() {
        },
        onReviewRFP: function(){
            this.getOwnerComponent().getRouter().navTo("RouteView3");
        }
      });
    }
  );
  