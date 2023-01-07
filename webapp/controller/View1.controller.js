sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("ordersproject.northwindordersproject.controller.View1", {
            onInit: function () {
                var oModel = this.getOwnerComponent().getModel();
                var t = this;
                oModel.read("/Orders", {
                    success: function (Data) {
                        debugger;
                        var model1 = new sap.ui.model.json.JSONModel();
                        model1.setData(Data);
                        MessageBox.success("Success");
                        //alert("Success");
                        t.getView().setModel(model1, "model1");
                    },
                    error: function (oError) {
                        MessageBox.error("Error");
                        //  alert(oerror);
                    }
                });

            },
            onFilterSearch: function (oEvent) {
                debugger;
                var sQuery = oEvent.getParameter("query"),
                    oTable = this.getView().byId("Tab"),
                    oBinding = oTable.getBinding("items");

                if (oEvent.getId() == "liveChange") {
                    sQuery = oEvent.getParameter("items");
                }

                if (sQuery) {
                    var oFilter1 = new Filter("OrderID", "EQ", sQuery);
                    var oFilter2 = new Filter("CustomerID", "EQ", sQuery);
                    var oFilter3 = new Filter("EmployeeID", "EQ", sQuery);
                    var oFilter4 = new Filter("OrderDate", "EQ", sQuery);
                    var oFilter5 = new Filter("RequiredDate", "EQ", sQuery);
                    var oFilter6 = new Filter("ShippedDate", "EQ", sQuery);
                    var oFilter7 = new Filter("ShipVia", "EQ", sQuery);
                    var oFilter8 = new Filter("Freight", "EQ", sQuery);
                    var oFilter9 = new Filter("ShipName", "EQ", sQuery);
                    var oFilter10 = new Filter("ShipAddress", "EQ", sQuery);
                    var oFilter11 = new Filter("ShipCity", "EQ", sQuery);
                    var oFilter12 = new Filter("ShipRegion", "EQ", sQuery);
                    var oFilter13 = new Filter("ShipPostalCode", "EQ", sQuery);
                    var oFilter14 = new Filter("ShipCountry", "EQ", sQuery);


                    var aFilter = new Filter([oFilter1, oFilter2, oFilter3, oFilter4, oFilter5, oFilter6, oFilter7,
                        oFilter8, oFilter9, oFilter10, oFilter11, oFilter12, oFilter13, oFilter14]);
                }

                oBinding.filter(aFilter);
            },

            onRowClick: function (oEvent) {
                var key = oEvent.oSource.mAggregations.cells[0].mProperties.text;
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                router.navTo("View2", { Id: key });
            },
        });
    });
