const Validator = require('validator');
const validText = require('./valid_text');

const validateLoginInput = input => {
    let errors = {};
    let { email, password } = input;

    email = validText(email) ? email : '';
    password = validText(password) ? password : '';

    if(Validator.isEmpty(email)){
        errors.email = 'email field is required'
    }

    if(!Validator.isEmail(email)){
        errors.email = 'email is invalid'
    }

    if(Validator.isEmpty(password)){
        errors.password = 'password field is required'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}

module.exports = validateLoginInput;