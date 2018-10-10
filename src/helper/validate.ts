import schema from './schema'
export function validate(object, schema) {
    var error = []
    for(let prop in schema) {

        if(Object.keys(object).indexOf(prop)  == -1 && schema[prop].required == false) continue;

        if(schema[prop].required == true) {
            if(schema[prop].isEmpty(object[prop])) error.push({'property': prop, 'error': `${prop} is a required field and cannot be empty`});
        }
    
        if(prop == "customer_email") {
            let is_valid = schema[prop].isValidEmail(object[prop]);
            if(!is_valid) error.push({'property': prop, 'error': `${prop} must be a valid email address`});
        }
      
        if(prop == "subaccounts") {
            let is_valid = schema[prop].isValidArray(object[prop]);
            if(!is_valid) error.push({'property': prop, 'error': `${prop} must be an array of objects`});
        }
      
        if(prop == "redirect_url") {
            let is_valid = schema[prop].isValidUri(object[prop]);
            if(!is_valid) error.push({'property': prop, 'error': `${prop} must be a valid url`});
        }
        

        if(!(schema[prop].type == typeof(object[prop]))) {
            if(prop == "subaccounts") continue
            error.push({'property': prop, 'error': `${prop} must be of type ${schema[prop].type}`});
        }
    }
    
    if(error.length == 0) return {valid: true, payload: object};
    else return {valid: false, error: error};
      
  }
    