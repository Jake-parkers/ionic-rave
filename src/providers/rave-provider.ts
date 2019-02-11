import { Injectable } from '@angular/core';
import { Misc } from './misc-provider';
import { RavePayment } from './rave-payment-provider';

import { HttpClient } from '@angular/common/http';
import { EventEmitter } from 'events';

EventEmitter

@Injectable()
export class Rave {
    uri: string;
    constructor(public misc: Misc, public ravePayment: RavePayment, private http: HttpClient, private evt: EventEmitter) {
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
        paymentObject["PBFPubKey"] = this.misc.PBFPubKey;
        var paymentObj = this.ravePayment.create(paymentObject)
        return new Promise((resolve, reject) => {
            if(paymentObj["validated"]) { 
                return this.http.post(this.uri, paymentObj, {headers: {'content-type': 'application/json'}})
                    .subscribe(response => {
                        if(response["status"] == "error") reject(response["message"])
                        else resolve(response["data"]["link"])
                    })
            }else reject(paymentObj)
        })
    }

    /**
     * Spins up the modal
     * @param paymentLink 
     */
    render(paymentLink, iab) {
        //@ts-ignore
        return iab.create(paymentLink.toString(), '_blank');
        // window.open(paymentLink, '_blank');
    }
    
}

