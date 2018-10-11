export var schema = {
    PBFPubKey: {
        required: "true",
        type: "string",
        isEmpty: function (data) {
            return data === "" || data == null || data == undefined;
        }
    },
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
    },
};
//# sourceMappingURL=schema.js.map