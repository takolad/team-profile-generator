const template = require('../src/template');
const inquirer = require('inquirer');

function getManager() {
    inquirer.prompt(template.managerPrompt).then((response) => {
        const manager = response;
        const empArray = [];
        empArray = getEmployee();
        empArray.unshift(manager);
        return empArray;
    })
    .catch(err => console.log(err));
}

function getEmployee() {
    inquirer.prompt(template.addEmpPrompt).then((response) => {
        const nextEmployee = response.employee;
        switch(nextEmployee) {
            case 'Engineer':
                getEngineer();
                break;
            case 'Intern':
                getIntern();
                break;
            default:
                return;

        }
        if (response.employee !== 'Complete Team') {
            getEmployee(); // recursive?
        } else return;
    })
    .catch(err => console.log(err));
}

function getEngineer() {
    inquirer.prompt(template.engineerPrompt).then((response) => {
        return response;
    })
    .catch(err => console.log(err));
}

function getIntern() {
    inquirer.prompt(template.internPrompt).then((response) => {
        return response;
    })
    .catch(err => console.log(err));
}

function generateProfile() {
    console.log('called, not coded (yet)');
}

module.exports = { getManager, 
                    getEmployee, 
                    getEngineer, 
                    getIntern,
                    generateProfile };