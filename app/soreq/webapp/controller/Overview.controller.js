sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("ust.so.soreq.controller.Overview", {

        onSearch: function (oEvent) {
            var sQuery = oEvent.getParameter("newValue");
            var oTable = this.byId("requisitionTable");
            var oBinding = oTable.getBinding("items");

            if (!sQuery) {
                oBinding.filter([]);
                return;
            }

            var aFilters = [
                new Filter("requisitionNo", FilterOperator.Contains, sQuery),
                new Filter("status", FilterOperator.Contains, sQuery),
                new Filter("customerName", FilterOperator.Contains, sQuery),
                new Filter("buyerName", FilterOperator.Contains, sQuery),
                new Filter("material", FilterOperator.Contains, sQuery),
                new Filter("materialDescription", FilterOperator.Contains, sQuery),
                new Filter("plant", FilterOperator.Contains, sQuery)
            ];

            oBinding.filter([
                new Filter({
                    filters: aFilters,
                    and: false
                })
            ]);
        },

        onItemPress: function (oEvent) {
            var oItem = oEvent.getParameter("listItem");
            var oContext = oItem.getBindingContext();
            var sID = oContext.getProperty("ID");

            this.getOwnerComponent().getRouter().navTo("Detail", {
                ID: sID
            });
        }

    });
});