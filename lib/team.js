const template = require('../src/template');
const inquirer = require('inquirer');
const fs = require('fs');
const html = require('../src/draftHTML');

const empArray = [];

const getManager = () => 
    inquirer.prompt(template.managerPrompt);

const getEmployee = () =>
    inquirer.prompt(template.employeePrompt);

const getEngineer = () => 
    inquirer.prompt(template.engineerPrompt);

const getIntern = () => 
    inquirer.prompt(template.internPrompt);

const employeeHtml = (answers) => {
    const title = '';
    const uniqueInfo = '';
    const unique = '';

    // UGLYx3, pretty up when done
    if (answers.office) {
        const unique = answers.office;
        const uniqueInfo = 'officeNumber';
        const title = 'Manager';

        return `<div class='card' id='${title.toLowerCase()}'>
        <div class='card-content'>
            // Employee Name / Title
            <div class='media-content' id='title'>
                <p class='title is-4>${answers.name}</p>
                <div class='media-left'>
                    <figure class='image is-48x48'>
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                    <p>${title}</p>
                </div>
            </div>
    
            <div class='content'>
                <ul id='infoList'>
                    <li>ID: ${answers.id}</li>
                    <li>Email: ${answers.email}</li>
                    <li id='${uniqueInfo}'>${unique}</li>
                </ul>
            </div>
        </div>
    </div>
    
    `;
    
    } if (answers.github) {

        const unique = answers.github;
        const uniqueInfo = 'github';
        const title = 'Engineer';

        return `<div class='card' id='${title.toLowerCase()}'>
    <div class='card-content'>
        // Employee Name / Title
        <div class='media-content' id='title'>
            <p class='title is-4>${answers.name}</p>
            <div class='media-left'>
                <figure class='image is-48x48'>
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
                <p>${title}</p>
            </div>
        </div>

        <div class='content'>
            <ul id='infoList'>
                <li>ID: ${answers.id}</li>
                <li>Email: ${answers.email}</li>
                <li id='${uniqueInfo}'>${unique}</li>
            </ul>
        </div>
    </div>
</div>

`;

        
    } if (answers.school) {
        
        const unique = answers.school;
        const uniqueInfo = 'school';
        const title = 'Intern';
        return `<div class='card' id='${title.toLowerCase()}'>
        <div class='card-content'>
            // Employee Name / Title
            <div class='media-content' id='title'>
                <p class='title is-4>${answers.name}</p>
                <div class='media-left'>
                    <figure class='image is-48x48'>
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                    <p>${title}</p>
                </div>
            </div>
    
            <div class='content'>
                <ul id='infoList'>
                    <li>ID: ${answers.id}</li>
                    <li>Email: ${answers.email}</li>
                    <li id='${uniqueInfo}'>${unique}</li>
                </ul>
            </div>
        </div>
    </div>
    
    `;
    }

    
}

// const empArray = [];

// async function getManager() {
//     inquirer.prompt(template.managerPrompt).then((response) => {
//         const managerName = response.name;
//         const managerId = response.id;
//         const managerEmail = response.email;
//         const uniqueId = response.office;


//         getEmployee();
//         empArray.unshift(manager);
//         return 'we live in a society, and these computers don\'t care'; // hopeless (me, right now)
//     })
//     .catch(err => console.log(err));
// }

// function getEmployee() {
//     inquirer.prompt(template.addEmpPrompt).then((response) => {
//         const nextEmployee = response.employee;
//         switch(nextEmployee) {
//             case 'Engineer':
//                 return getEngineer();
//             case 'Intern':
//                 return getIntern();
//             case 'Complete Team':
//                 return generateProfile();
//             default:
//                 return 0;

//         }
//     })
//     .catch(err => console.log(err));
// }

// function getEngineer() {
//     inquirer.prompt(template.engineerPrompt).then((response) => {
//         empArray.push(response);
//         getEmployee();
//     })
//     .catch(err => console.log(err));
// }

// function getIntern() {
//     inquirer.prompt(template.internPrompt).then((response) => {
//         empArray.push(response);
//         getEmployee();
//     })
//     .catch(err => console.log(err));
// }

// function generateProfile() {
//     const squad = html.buildHtml(empArray);
//     fs.writeFileSync('../dist', squad, (err) => {
//         err ? console.log(err) : console.log("Successfully wrote file to /dist");
//     })
// }

module.exports = { employeeHtml, 
                    getManager, 
                    getEmployee, 
                    getEngineer, 
                    getIntern,
                    // generateProfile,
                    // empArray 
                };