const Validator = require('validator');
const validText = require('./valid_text');

const validateRegisterInput = input => {
    let errors = {};
    let { name, email, password, password2 } = input;
    
    //make sure validator inputs are strings
    name = validText(name) ? name : '';
    email = validText(email) ? email : '';
    password = validText(password) ? password : '';
    password2 = validText(password2) ? password2 : '';

    if(Validator.isEmpty(name)){
        errors.name = 'username is required'
    }

    if(!Validator.isLength(name, { min: 3, max: 15})){
        errors.name = 'username must be between 3 and 15 characters'
    }

    if(Validator.isEmpty(email)){
        errors.email = 'email is required'
    }

    if(!Validator.isEmail(email)){
        errors.email = 'email is invalid'
    }

    if(Validator.isEmpty(password)){
        errors.password = 'password is required'
    }

    if(!Validator.isLength(password, {min: 6, max: 30})){
        errors.password = 'password must be at least 6 characters'
    }

    if(Validator.isEmpty(password2)){
        errors.password2 = 'confirm password field is required'
    }

    if(!Validator.equals(password, password2)){
        errors.password2 = 'passwords must match'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}

module.exports = validateRegisterInput;