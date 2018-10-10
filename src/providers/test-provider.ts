import { Injectable } from '@angular/core';
var getpaidSetup: Function
@Injectable()
export class TestProvider {
    uri: string;
    sandbox: string = 'https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js';
    live: string = 'https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js';
    constructor() {
        
        /**
         * PBFPubKey - true
         * integrity_hash - false
         * payment_options -  false
         * txref - true
         * payment_options - false
         * payment_plan - false
         * subaccounts - false
         * amount - false
         * currency - false
         * country - false
         * customer_phone - true
         * customer_email - true
         * customer_firstname - false
         * customer_lastname - false
         * custom_title - false
         * custom_description - false
         * redirect_url - false
         * custom_logo - false
         * callback: function(b)
         * onclose: function()
         */
    }

    setup(production=false) {
        if (production) this.uri = this.live;
        else this.uri = this.sandbox;

        // load script
        this.loadRaveInline();
    }

    paymentDetails() {
        return {
            PBFPubKey: "FLWPUBK-ba0a57153f497c03bf34a9e296aa9439-X",
            customer_email: "kwakujosh@gmail.com",
            amount: 2000,
            customer_phone: "234099940409",
            currency: "NGN",
            payment_options: "card,account",
            txref: "MY-BIZ"+Date.now(),
            meta: [{
                metaname: "flightID",
                metavalue: "AP1234"
            }]
        }
    }

    loadRaveInline() {
        let body = <HTMLDivElement> document.body;
        let script = document.createElement("script");
        script.src = this.uri;
        body.appendChild(script);
    }

    
}