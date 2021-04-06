const fs = require('fs');
const team = require('./lib/team');

const empArray = [];
var empType = '';



function init () {

    team.getManager().then((answers) => {
        try {
            // get the string for manager
            const managerString = team.employeeHtml(answers);
            empArray.push(managerString);
            if (answers.additional !== 'Complete Team') {
                empType = answers.additional;
            }
        } catch (error) {
            console.log(error);
        } 
        // then ask for additional employee
    })
    .then(() => {
            switch (empType) {
                case 'Engineer':
                            team.getEngineer().then((answers) => {
                                try {
                                    const engineerString = team.employeeHtml(answers);
                                    empArray.push(engineerString);
                                    additional = answers.additional;
                                } catch (error) {
                                    console.log(error);
                                }
                            });
                            break;
                        case 'Intern':
                            team.getIntern().then((answers) => {
                                try {
                                    const internString = team.employeeHtml(answers);
                                    empArray.push(internString);
                                    additional = answers.additional;
                                } catch (error) {
                                    console.log(error);
                                }
                            })
                            break;
                        default:
                            return 0;
            }
        }
            // team.getEmployee().then((answers) => {
            //     if (answers.employee !== 'Complete Team') {
            //         switch (answers.employee) {
            //             case 'Engineer':
            //                 team.getEngineer().then((answers) => {
            //                     try {
            //                         const engineerString = team.employeeHtml(answers);
            //                         empArray.push(engineerString);
            //                     } catch (error) {
            //                         console.log(error);
            //                     }
            //                 });
            //                 break;
            //             case 'Intern':
            //                 team.getIntern().then((answers) => {
            //                     try {
            //                         const internString = team.employeeHtml(answers);
            //                         empArray.push(internString);
            //                     } catch (error) {
            //                         console.log(error);
            //                     }
            //                 })
            //                 break;
            //         }
            //     }
            // });
    })
    .then(() => { console.log(empArray); })
};

init(); // towinit (getit?(i'm having a bad time))