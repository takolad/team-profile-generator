const Employee = require('./Employee');
const validate = require('./validate');

class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(validate.validateName(name), 
            validate.validateId(id), 
            validate.validateEmail(email));
        this.github = validate.validateGithub(github);
    }

    getGithub() { return this.github; }

    getRole() { return 'Engineer' }
}

module.exports = Engineer;