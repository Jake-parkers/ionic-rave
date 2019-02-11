import { Misc } from './misc-provider';
import { RavePayment } from './rave-payment-provider';
import { HttpClient } from '@angular/common/http';
export declare class Rave {
    misc: Misc;
    ravePayment: RavePayment;
    private http;
    uri: string;
    constructor(misc: Misc, ravePayment: RavePayment, http: HttpClient);
    /**
     *
     * @param production
     * @param public_key
     */
    init(production: boolean, public_key: any): Promise<{}>;
    /**
     * Returns a payment link that can be used to spin up the modal
     * @param paymentObject
     */
    preRender(paymentObject: RavePayment): Promise<{}>;
    /**
     * Spins up the modal
     * @param paymentLink
     */
    render(paymentLink: any, iab: any): any;
}
