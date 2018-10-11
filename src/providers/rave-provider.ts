import { Injectable } from '@angular/core';
import * as Validator from '../helper/validate';
const validate = Validator.validate;
(window as any).getpaidSetup
window["getpaidSetup"] = () => {}
var getpaidSetup: Function
@Injectable()
export class RaveProvider {
    uri: string;
    sandbox: string = 'https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js';
    live: string = 'https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js';
    constructor() {
    }

    /**
     * This function loads the rave inline js unto the current window.
     * It also validates the payment object the programmer passes in
     * @param production - a boolean that determines if the uri will be set to live or sandbox
     * @param payload -  this is the payment object passed in by the programmer
     */
    setup(production=false, payload) {
        if (production) this.uri = this.live;
        else this.uri = this.sandbox;

        // load script
        this.loadRaveInline();

        // validate payload
        if(payload) return validate(payload)
        else return {valid: false, error: "No payment object passed in. Kindly pass one"}

    }

    /**
     * This function appends rave inline js to the body tag
     */
    loadRaveInline() {
        let body = <HTMLDivElement> document.body;
        let script = document.createElement("script");
        script.src = this.uri;
        body.appendChild(script);
    }

    
}