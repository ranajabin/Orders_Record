sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("ordersproject.northwindordersproject.controller.View2", {
            onInit: function () {

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("View2").attachPatternMatched(this.onRouteMatch, this);
            },

            onRouteMatch: function (evt) {
                var keyId2 = evt.mParameters.arguments.Id;
                var oModel = this.getOwnerComponent().getModel();
                var t = this;
                oModel.read("/Orders", {
                    success: function (odata) {
                        var model11 = new sap.ui.model.json.JSONModel();
                        model11.setData(odata);
                        t.getView().setModel(model11);

                        var key2 = model11.oData.results;
                        var array1 = [];

                        for (var i = 0; i < key2.length; i++) {
                            if (keyId2 == key2[i].OrderID) {
                                array1.push(key2[i]);

                                var array2 = new sap.ui.model.json.JSONModel();
                                array2.setData(array1);
                                t.getView().setModel(array2, "array2");
                            }
                        }
                    }
                });
            },
            onNavBack: function () {
                history.go(-1);
            },
            onPress: function () {
                MessageBox.success("Order Confirmed");
            }
        });
    });
