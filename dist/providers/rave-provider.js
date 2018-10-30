import { Injectable } from '@angular/core';
import { Misc } from './misc-provider';
import { HttpClient } from '@angular/common/http';
require('cordova-plugin-inappbrowser');
var Rave = (function () {
    function Rave(misc, http) {
        this.misc = misc;
        this.http = http;
    }
    /**
     *
     * @param production
     * @param public_key
     */
    /**
         *
         * @param production
         * @param public_key
         */
    Rave.prototype.init = /**
         *
         * @param production
         * @param public_key
         */
    function (production, public_key) {
        var _this = this;
        if (production === void 0) { production = false; }
        return new Promise(function (resolve, reject) {
            if (public_key == undefined)
                reject("Please pass in a valid public key");
            if (production)
                _this.uri = _this.misc.live;
            else
                _this.uri = _this.misc.sandbox;
            _this.misc.PBFPubKey = public_key;
            resolve(true);
        });
    };
    /**
     * Returns a payment link that can be used to spin up the modal
     * @param paymentObject
     */
    /**
         * Returns a payment link that can be used to spin up the modal
         * @param paymentObject
         */
    Rave.prototype.preRender = /**
         * Returns a payment link that can be used to spin up the modal
         * @param paymentObject
         */
    function (paymentObject) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            paymentObject['PBFPubKey'] = _this.misc.PBFPubKey;
            return _this.http.post('https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/v2/hosted/', paymentObject, { headers: { 'content-type': 'application/json' } })
                .subscribe(function (response) {
                if (response["status"] == "error")
                    reject(response["message"]);
                else
                    resolve(response["data"]["link"]);
            });
        });
    };
    /**
     * Spins up the modal
     * @param paymentLink
     */
    /**
         * Spins up the modal
         * @param paymentLink
         */
    Rave.prototype.render = /**
         * Spins up the modal
         * @param paymentLink
         */
    function (paymentLink) {
        //@ts-ignore
        window.open(paymentLink, '_blank');
    };
    Rave.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Rave.ctorParameters = function () { return [
        { type: Misc, },
        { type: HttpClient, },
    ]; };
    return Rave;
}());
export { Rave };
//# sourceMappingURL=rave-provider.js.map