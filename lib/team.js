const template = require('../src/template');
const inquirer = require('inquirer');

const empArray = [];

function getManager() {
    inquirer.prompt(template.managerPrompt).then((response) => {
        const manager = response;
        getEmployee();
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
                return getEngineer();
            case 'Intern':
                return getIntern();
            default:
                return;

        }
    })
    .catch(err => console.log(err));
}

function getEngineer() {
    inquirer.prompt(template.engineerPrompt).then((response) => {
        empArray.push(response);
        getEmployee();
    })
    .catch(err => console.log(err));
}

function getIntern() {
    inquirer.prompt(template.internPrompt).then((response) => {
        empArray.push(response);
        getEmployee();
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