const inquirer = require('inquirer');
const fs = require('fs');
const promptTemplate = require('template.js');

function init () {

inquirer
    .prompt()
    .then((response) => {

    })
    .catch(err => console.log(err));

}

init();