odoo.define("6sigmacode_joon_pos_electronic_ksa.PaymentScreenStatus", function (require) {
    "use strict";

    const PosComponent = require("point_of_sale.PosComponent");
    const Registries = require("point_of_sale.Registries");
    var core = require("web.core");
    const PaymentScreen = require("point_of_sale.PaymentScreen");
    const { useListener } = require("web.custom_hooks");
    const { parse } = require("web.field_utils");
    const { useErrorHandlers } = require("point_of_sale.custom_hooks");
    const NumberBuffer = require("point_of_sale.NumberBuffer");
    const { onChangeOrder } = require("point_of_sale.custom_hooks");
    const { Gui } = require("point_of_sale.Gui");

     const PosInheritPaymentScreen = (PaymentScreen) =>
        class extends PaymentScreen {
            constructor() {
                super(...arguments);
            }
            async validateOrder(isForceValidate) {
                // Phone Validate Start
                if(typeof($('#phone').val()) === "undefined"){
                    return false
                }
                if(($('#phone').val()).length < 1){
                    Gui.showPopup('PoPopup', {
                        title: 'Phone Number',
                        body: "Phone Number Is Required.",
                    })
                    return false;
                }
                // Phone Validate end
                super.validateOrder(isForceValidate);
            }
        };
     Registries.Component.extend(PaymentScreen, PosInheritPaymentScreen);
     return {
        PosInheritPaymentScreen,
    };
});
