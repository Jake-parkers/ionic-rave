import { Injectable } from '@angular/core';
import { Misc } from './misc-provider';
import { RavePayment } from './rave-payment-provider';

import { HttpClient } from '@angular/common/http';

require('cordova-plugin-inappbrowser');

@Injectable()
export class Rave {
    uri: string;
    constructor(public misc: Misc, private http: HttpClient) {
    }

    /**
     * 
     * @param production 
     * @param public_key 
     */
    init(production=false, public_key) {
        return new Promise((resolve, reject) => {
            if(public_key == undefined) reject("Please pass in a valid public key");
            if (production) this.uri = this.misc.live;
            else this.uri = this.misc.sandbox;
            this.misc.PBFPubKey = public_key;
            resolve(true)
        })    
    }

    /**
     * Returns a payment link that can be used to spin up the modal
     * @param paymentObject 
     */
    preRender(paymentObject:RavePayment) {
        return new Promise((resolve, reject) => {
            paymentObject['PBFPubKey'] = this.misc.PBFPubKey;
            return this.http.post('https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/v2/hosted/', paymentObject, {headers: {'content-type': 'application/json'}})
                .subscribe(response => {
                    if(response["status"] == "error") reject(response["message"])
                    else resolve(response["data"]["link"])
                })
        })
    }

    /**
     * Spins up the modal
     * @param paymentLink 
     */
    render(paymentLink) {
        //@ts-ignore
        window.open(paymentLink, '_blank');
    }
    
}

