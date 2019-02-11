import { Injectable } from '@angular/core';
import { Misc } from './misc-provider';
import { RavePayment } from './rave-payment-provider';
import { HttpClient } from '@angular/common/http';
var Rave = (function () {
    function Rave(misc, ravePayment, http) {
        this.misc = misc;
        this.ravePayment = ravePayment;
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
        paymentObject["PBFPubKey"] = this.misc.PBFPubKey;
        var paymentObj = this.ravePayment.create(paymentObject);
        return new Promise(function (resolve, reject) {
            if (paymentObj["validated"]) {
                return _this.http.post(_this.uri, paymentObj, { headers: { 'content-type': 'application/json' } })
                    .subscribe(function (response) {
                    if (response["status"] == "error")
                        reject(response["message"]);
                    else
                        resolve(response["data"]["link"]);
                });
            }
            else
                reject(paymentObj);
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
    function (paymentLink, iab) {
        //@ts-ignore
        return iab.create(paymentLink.toString(), '_blank');
        // iab.on("loadstop")
        //   .subscribe((ev) => {
        //     console.log(ev.url.toString());
        //     if(ev.url.indexOf('https://guarded-lake') != -1) iab.close();
        //   })
        // window.open(paymentLink, '_blank');
    };
    Rave.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Rave.ctorParameters = function () { return [
        { type: Misc, },
        { type: RavePayment, },
        { type: HttpClient, },
    ]; };
    return Rave;
}());
export { Rave };
//# sourceMappingURL=rave-provider.js.map