const validate = require("./validate");

class Employee {

    constructor(name, id, email) {
        this.name = validate.validateName(name);
        this.id = validate.validateId(id);
        this.email = validate.validateEmail(email);
    }

    getName() { return this.name; }

    getId() { return this.id; }

    getEmail() { return this.email; }

    getRole() { return 'Employee' }
}

module.exports = Employee;