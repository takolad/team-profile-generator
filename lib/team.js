const template = require('../src/template');
const inquirer = require('inquirer');
const empArray = [];

// prompt user for manager information then calls getEmployee()
function getManager() {
    inquirer.prompt(template.managerPrompt).then((response) => {
        const manager = response;
        empArray.unshift(manager);
        getEmployee();
    })
    .catch(err => console.log(err));
}

// prompts the user if they would like to add an Additional Employee
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
                generateProfile(empArray);
                return;
        }
    })
    .catch(err => console.log(err));
}

// promps the user for an engineer's information
function getEngineer() {
    inquirer.prompt(template.engineerPrompt).then((response) => {
        empArray.push(response);
        getEmployee();
    })
    .catch(err => console.log(err));
}

// prompts the user for an intern's information
function getIntern() {
    inquirer.prompt(template.internPrompt).then((response) => {
        empArray.push(response);
        getEmployee();
    })
    .catch(err => console.log(err));
}

// takes the array of employee information 
// and generates the HTML/CSS files
function generateProfile(squad) {
    console.log('TBC Create HTML/CSS Files');
    console.log(squad);
}

module.exports = { getManager, 
                    getEmployee, 
                    getEngineer, 
                    getIntern,
                    generateProfile };