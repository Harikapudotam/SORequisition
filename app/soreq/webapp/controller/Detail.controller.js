sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("ust.soreq.controller.Detail", {

        onInit: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("Detail").attachPatternMatched(this._onRouteMatched, this);
        },

        _onRouteMatched: function (oEvent) {
            var sID = oEvent.getParameter("arguments").ID;

            var sPath = "/SalesOrderRequisitions(guid'" + sID + "')";

            this.getView().bindElement({
                path: sPath,
                parameters: {
                    expand: "items"
                },
                events: {
                    dataRequested: function () {
                        sap.ui.core.BusyIndicator.show(0);
                    },
                    dataReceived: function () {
                        sap.ui.core.BusyIndicator.hide();
                    }
                }
            });
        },

        onItemPress: function (oEvent) {
            var oItem = oEvent.getParameter("listItem");
            var oContext = oItem.getBindingContext();
            var sID = oContext.getProperty("ID");

            this.getOwnerComponent().getRouter().navTo("ItemDetail", {
                ID: sID
            });
        },

        onNavBack: function () {
            this.getOwnerComponent().getRouter().navTo("List");
        }

    });
});