const Employee = require('./Employee');
const validate = require('./validate');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(validate.validateName(name), 
            validate.validateId(id), 
            validate.validateEmail(email));
        this.school = validate.validateName(school);
    }

    getSchool() { return this.school };

    getRole() { return 'Intern' }
}

module.exports = Intern;