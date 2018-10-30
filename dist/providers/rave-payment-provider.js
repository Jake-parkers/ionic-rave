import { Injectable } from '@angular/core';
var RavePayment = (function () {
    /**
     *
     * @param amount
     * @param currency
     * @param customer_email
     * @param redirect_url
     * @param transaction_reference
     */
    function RavePayment(amount, currency, customer_email, redirect_url, transaction_reference) {
        if (customer_email.length == 0 || redirect_url.length == 0 || transaction_reference.length == 0)
            return "customer_email or redirect_url or transaction reference not valid";
        return {
            amount: amount,
            currency: currency,
            customer_email: customer_email,
            redirect_url: redirect_url,
            transaction_reference: transaction_reference
        };
    }
    RavePayment.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    RavePayment.ctorParameters = function () { return [
        null,
        null,
        null,
        null,
        null,
    ]; };
    return RavePayment;
}());
export { RavePayment };
//# sourceMappingURL=rave-payment-provider.js.map