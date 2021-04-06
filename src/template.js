// template helper code?
const managerPrompt = [
    {
        type: 'input',
        message: "Enter the team manager's name: ",
        name: 'name',
        validate: function (value) {
            if(value) {
                return true;
            }
            return 'Please enter the manager name';
        }
    },
    {
        type: 'number',
        message: "Enter the team manager's employee ID: ",
        name: 'id',
    },
    {
        type: 'input',
        message: "Enter the team manager's email address: ",
        name: 'email'
    },
    {
        type: 'number',
        message: "Enter the team manager's office number: ",
        name: 'office'

    },
]

const employeePrompt = [
    {
        type: 'list',
        message: "Add an additional employee to the team:",
        choices: ['Engineer', 'Intern', 'Complete Team'],
        name: 'additional',
    },
]

const engineerPrompt = [
    {
        type: 'input',
        message: "Enter the engineers's name: ",
        name: 'name'
    },
    {
        type: 'number',
        message: "Enter the engineers's employee ID: ",
        name: 'id'
    },
    {
        type: 'input',
        message: "Enter the engineers's email address: ",
        name: 'email'
    },
    {
        type: 'input',
        message: "Enter the engineers's GitHub username: ",
        name: 'github'
    },
]

const internPrompt = [
    {
        type: 'input',
        message: "Enter the intern's name: ",
        name: 'name'
    },
    {
        type: 'number',
        message: "Enter the intern's employee ID: ",
        name: 'id'
    },
    {
        type: 'input',
        message: "Enter the intern's email address: ",
        name: 'email'
    },
    {
        type: 'input',
        message: "Enter the interns's school: ",
        name: 'school'
    },
]

module.exports = { managerPrompt,
                    employeePrompt,
                    engineerPrompt, 
                    internPrompt }