const fs = require('fs');
const team = require('./lib/team');

const empArray = [];
var nextEmp = '';


function init () {

    team.getManager().then((answers) => {
        try {
            // adds the manager information to the array
            empArray.push(team.employeeHtml(answers));
        } catch (error) {
            console.log(error);
        }
    })
    .then(() => {
        try {
            nextEmp = team.getEmployee();
        } catch (error) {
            console.log(error);
        }
    })
    .then(() => {
            switch (nextEmp) {
                case 'Engineer':
                    team.getEngineer().then((answers) => {
                        try {
                            empArray.push(team.employeeHtml(answers));
                            nextEmp = answers.additional;
                        } catch (error) {
                            console.log(error);
                        }
                    });
                    break;
                case 'Intern':
                    team.getIntern().then((answers) => {
                        try {
                            empArray.push(team.employeeHtml(answers));
                            nextEmp = answers.additional;
                        } catch (error) {
                            console.log(error);
                        }
                    })
                    break;
                case 'Complete Team':
                    console.log("it's fucking done");
            };
    })
    // .then(() => { console.log(empArray); })
};

init(); // towinit (getit?(i'm having a bad time))