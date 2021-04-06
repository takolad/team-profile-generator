const team = require('../lib/team');

// const employees = team.empArray;
// const squad = '';

// employees.forEach(build);

// function buildHtml(arr) {
//     arr.forEach((value, idx) => {
//         const index = idx;
//         empName = value.name;
//         empId = value.id;
//         empEmail = value.email;
//         // github, school, office
//         if (value.office) {
//             uniqueString = value.office;
//         } else if (value.github) {
//             uniqueString = value.github
//         } else if (value.school) {
//             uniqueString = value.school;
//         }
        
//         squad += newEmployeeString
//     }).then()
    
//     return html;
// }

const newEmployeeString = (answers) =>
`<div class='card' id='emp${answers.index}'>
    <div class='card-content'>
        // Employee Name / Title
        <div class='media-content' id='title'>
            <p class='title is-4>${answers.empName}</p>
            <div class='media-left'>
                <figure class='image is-48x48'>
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
                <p>${answers.empType}</p>
            </div>
        </div>

        <div class='content'>
            <ul id='infoList'>
                <li>ID: ${answers.empId}</li>
                <li>Email: ${answers.empEmail}</li>
                <li id='uniqueId'>${answers.uniqueString}</li>
            </ul>
        </div>
    </div>
</div>

`;

const html = (finalTeam) => 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>

    <!-- Bulma Style CDN  -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
    
    <!-- <link rel="stylesheet" href="style.css"> -->
</head>
<body>
    <section class="header has-background-danger has-text-centered pb-5 pt-5">
        <h1 class="has-text-primary-light is-size-3">My Team</h1>
    </section>
    <section class="section">
        <div class="container" id="team">
            ${finalTeam}
        </div>
    </section>
    
</body>
</html>
`;

module.exports =  { html, newEmployeeString };