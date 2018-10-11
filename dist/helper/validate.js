import * as Schema from './schema';
var schema = Schema.schema;
export function validate(object) {
    var error = [];
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
}
//# sourceMappingURL=validate.js.map