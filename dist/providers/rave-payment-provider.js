import { Injectable } from '@angular/core';
import { Misc } from './misc-provider';
var RavePayment = (function () {
    function RavePayment(misc) {
        this.misc = misc;
        // amount = "";
        // currency = "";
        // customer_email = "";
        // txref = ""
        // redirect_url = ""
        // meta = ""
        // custom_description = ""
        // customer_phone = ""
        // PBFPubkey = ""
        // integrity_hash = ""
        // payment_options = ""
        // payment_plan = ""
        // subaccounts = []
        // country = ""
        // customer_firstname = ""
        // customer_lastname = ""
        // custom_title = "";
        this.schema = {
            txref: {
                required: "true",
                type: "string",
                isEmpty: function (data) {
                    return data === "" || data == null || data == undefined;
                }
            },
            customer_phone: {
                required: "true",
                type: "string",
                isEmpty: function (data) {
                    return data === "" || data == null || data == undefined;
                }
            },
            customer_email: {
                required: "true",
                type: "string",
                isEmpty: function (data) {
                    return data === "" || data == null || data == undefined;
                },
                isValidEmail: function (email) {
                    return email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
                }
            },
            amount: {
                required: "true",
                type: "number",
                isEmpty: function (data) {
                    return data === "" || data == null || data == undefined;
                }
            },
            integrity_hash: {
                required: false,
                type: "string",
            },
            payment_options: {
                required: false,
                type: "string",
            },
            payment_plan: {
                required: false,
                type: "number",
            },
            subaccounts: {
                required: false,
                isValidArray: function (array) {
                    return Array.isArray(array);
                }
            },
            currency: {
                required: false,
                type: "string"
            },
            country: {
                required: false,
                type: "string",
            },
            customer_firstname: {
                required: false,
                type: "string",
            },
            customer_lastname: {
                required: false,
                type: "string",
            },
            custom_title: {
                required: false,
                type: "string",
            },
            custom_description: {
                required: false,
                type: "string",
            },
            redirect_url: {
                required: false,
                type: "string",
                isValidUri: function (email) {
                    return email.match(/\w+:(\/?\/?)[^\s]+/g);
                }
            }
        };
    }
    RavePayment.prototype.create = function (payload) {
        var result = this.validate(payload);
        if (result["valid"] == false)
            return result["error"];
        else {
            // for (const key in result["payload"]) {
            //     if (result["payload"].hasOwnProperty(key)) {
            //         this[key] = result["payload"][key];
            //     }
            // }
            this.misc.paymentObject = result["payload"];
            return result["payload"];
        }
    };
    RavePayment.prototype.amount = function () {
        return this.misc.paymentObject["amount"];
    };
    RavePayment.prototype.currency = function () {
        return this.misc.paymentObject["currency"];
    };
    RavePayment.prototype.email = function () {
        return this.misc.paymentObject["customer_email"];
    };
    RavePayment.prototype.txref = function () {
        return this.misc.paymentObject["txref"];
    };
    RavePayment.prototype.validate = function (object) {
        var error = [];
        var schema = this.schema;
        if (object != null && typeof (object) == "object" && Array.isArray(object) == false) {
            // checks if payload object passed in is really an object
            for (var prop in schema) {
                if (Object.keys(object).indexOf(prop) == -1 && schema[prop].required == false)
                    continue;
                if (schema[prop].required == true) {
                    if (schema[prop].isEmpty(object[prop]))
                        error.push({ 'property': prop, 'error': prop + " is a required field and cannot be empty" });
                }
                if (prop == "customer_email") {
                    var is_valid = schema[prop].isValidEmail(object[prop]);
                    if (!is_valid)
                        error.push({ 'property': prop, 'error': prop + " must be a valid email address" });
                }
                if (prop == "subaccounts") {
                    var is_valid = schema[prop].isValidArray(object[prop]);
                    if (!is_valid)
                        error.push({ 'property': prop, 'error': prop + " must be an array of objects" });
                }
                if (prop == "redirect_url") {
                    var is_valid = schema[prop].isValidUri(object[prop]);
                    if (!is_valid)
                        error.push({ 'property': prop, 'error': prop + " must be a valid url" });
                }
                if (!(schema[prop].type == typeof (object[prop]))) {
                    // checks that every parameter in the object is of its correct type
                    if (prop == "subaccounts")
                        continue;
                    error.push({ 'property': prop, 'error': prop + " must be of type " + schema[prop].type });
                }
            }
        }
        else
            error.push({ property: object, error: "You must pass in an object" });
        if (error.length == 0) {
            object.validated = true;
            return { valid: true, payload: object };
        }
        else
            return { valid: false, error: error };
    };
    RavePayment.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    RavePayment.ctorParameters = function () { return [
        { type: Misc, },
    ]; };
    return RavePayment;
}());
export { RavePayment };
//# sourceMappingURL=rave-payment-provider.js.map