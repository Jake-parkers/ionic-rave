import { Injectable } from '@angular/core';

@Injectable()

export class RavePayment {
    /**
     * 
     * @param amount 
     * @param currency 
     * @param customer_email 
     * @param redirect_url 
     * @param transaction_reference 
     */
    constructor(amount, currency, customer_email, redirect_url, transaction_reference) {
        if(customer_email.length == 0 || redirect_url.length == 0 || transaction_reference.length == 0) return `customer_email or redirect_url or transaction reference not valid`;
        return {
            amount,
            currency,
            customer_email,
            redirect_url,
            transaction_reference
        }
    }
    
}
