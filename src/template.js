// template helper code?
const managerPrompt = [
    {
        type: 'input',
        message: "Enter the team manager's name: ",
        name: 'name'
    },
    {
        type: 'input',
        message: "Enter the team manager's employee ID: ",
        name: 'id'
    },
    {
        type: 'input',
        message: "Enter the team manager's email address: ",
        name: 'email'
    },
    {
        type: 'input',
        message: "Enter the team manager's office number: ",
        name: 'name'
    },
]

const addEmpPrompt = [
    {
        type: 'list',
        message: "Add additional Employee to team:",
        choice: ['Engineer', 'Intern', 'Complete Team'],
        name: 'employee'
    }
]

const engineerPrompt = [
    {
        type: 'input',
        message: "Enter the engineers's name: ",
        name: 'name'
    },
    {
        type: 'input',
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
        type: 'input',
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