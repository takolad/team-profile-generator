const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(name, id, email, github) {  // could possibly just pass an emp obj? (and github)
        super(name, id, email);
        this.github = github;
    }

    getGithub() { return this.github; }

    getRole() { return 'Engineer' }
}