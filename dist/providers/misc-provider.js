import { Injectable } from '@angular/core';
var Misc = (function () {
    function Misc() {
        this.PBFPubKey = "";
        this.paymentObject = {};
        this.sandbox = "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/v2/hosted/pay";
        this.live = 'https://api.ravepay.co/flwv3-pug/getpaidx/api/v2/hosted/pay';
    }
    Misc.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Misc.ctorParameters = function () { return []; };
    return Misc;
}());
export { Misc };
//# sourceMappingURL=misc-provider.js.map