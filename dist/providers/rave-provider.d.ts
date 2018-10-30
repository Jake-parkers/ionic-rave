import { Misc } from './misc-provider';
import { RavePayment } from './rave-payment-provider';
import { HttpClient } from '@angular/common/http';
export declare class Rave {
    misc: Misc;
    private http;
    uri: string;
    constructor(misc: Misc, http: HttpClient);
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
    render(paymentLink: any): void;
}
