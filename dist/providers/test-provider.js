import { Injectable } from '@angular/core';
var getpaidSetup;
var TestProvider = (function () {
    function TestProvider() {
        /**
                 * PBFPubKey
                 * integrity_hash
                 * payment_options
                 * txref
                 * payment_options
                 * payment_plan
                 * subaccounts
                 * amount
                 * currency
                 * country
                 * customer_phone
                 * customer_email
                 * customer_firstname
                 * customer_lastname
                 * pay_button_text
                 * custom_title
                 * custom_description
                 * redirect_url
                 * custom_logo
                 * callback: function(b)
                 * onclose: function()
                 */
        this.sandbox = 'https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js';
        this.live = 'https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js';
    }
    TestProvider.prototype.setup = function (production) {
        if (production === void 0) { production = false; }
        if (production)
            this.uri = this.live;
        else
            this.uri = this.sandbox;
        // load script
        this.loadRaveInline();
    };
    TestProvider.prototype.paymentDetails = function () {
        console.log(getpaidSetup);
        return {
            PBFPubKey: "FLWPUBK-ba0a57153f497c03bf34a9e296aa9439-X",
            customer_email: "kwakujosh@gmail.com",
            amount: 2000,
            customer_phone: "234099940409",
            currency: "NGN",
            payment_options: "card,account",
            txref: "MY-BIZ" + Date.now(),
            meta: [{
                    metaname: "flightID",
                    metavalue: "AP1234"
                }]
        };
    };
    TestProvider.prototype.loadRaveInline = function () {
        var body = document.body;
        var script = document.createElement("script");
        script.src = this.uri;
        body.appendChild(script);
    };
    TestProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TestProvider.ctorParameters = function () { return []; };
    return TestProvider;
}());
export { TestProvider };
//# sourceMappingURL=test-provider.js.map