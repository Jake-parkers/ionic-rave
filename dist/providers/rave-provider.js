import { Injectable } from '@angular/core';
import * as Validator from '../helper/validate';
var validate = Validator.validate;
window.getpaidSetup;
window["getpaidSetup"] = function () { };
var getpaidSetup;
var RaveProvider = (function () {
    function RaveProvider() {
        this.sandbox = 'https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js';
        this.live = 'https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js';
    }
    /**
     * This function loads the rave inline js unto the current window.
     * It also validates the payment object the programmer passes in
     * @param production - a boolean that determines if the uri will be set to live or sandbox
     * @param payload -  this is the payment object passed in by the programmer
     */
    /**
         * This function loads the rave inline js unto the current window.
         * It also validates the payment object the programmer passes in
         * @param production - a boolean that determines if the uri will be set to live or sandbox
         * @param payload -  this is the payment object passed in by the programmer
         */
    RaveProvider.prototype.setup = /**
         * This function loads the rave inline js unto the current window.
         * It also validates the payment object the programmer passes in
         * @param production - a boolean that determines if the uri will be set to live or sandbox
         * @param payload -  this is the payment object passed in by the programmer
         */
    function (production, payload) {
        if (production === void 0) { production = false; }
        if (production)
            this.uri = this.live;
        else
            this.uri = this.sandbox;
        // load script
        this.loadRaveInline();
        // validate payload
        if (payload)
            return validate(payload);
        else
            return { valid: false, error: "No payment object passed in. Kindly pass one" };
    };
    /**
     * This function appends rave inline js to the body tag
     */
    /**
         * This function appends rave inline js to the body tag
         */
    RaveProvider.prototype.loadRaveInline = /**
         * This function appends rave inline js to the body tag
         */
    function () {
        var body = document.body;
        var script = document.createElement("script");
        script.src = this.uri;
        body.appendChild(script);
    };
    RaveProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    RaveProvider.ctorParameters = function () { return []; };
    return RaveProvider;
}());
export { RaveProvider };
//# sourceMappingURL=rave-provider.js.map