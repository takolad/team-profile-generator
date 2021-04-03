const Employee = require('./Employee');
const validate = require('./validate');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(validate.validateName(name), 
            validate.validateId(id), 
            validate.validateEmail(email));
        this.officeNumber = validate.validateOfficeNum(officeNumber);
    }

    getRole() { return 'Manager' }
}

module.exports = Manager;