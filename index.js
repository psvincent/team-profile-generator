// This gets the inquirer package.
const inquirer = require('inquirer');


// This uses inquirer to ask the user all the questions about the team manager.
const managerCard = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: "What is your team manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your team manager's employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your team manager's email address?",
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is your team manager's office number?",
    },
    {
        type: 'list',
        name: 'newMember',
        message: 'Would you like to add an engineer, an intern, or finish building your team?',
        choices: ['engineer', 'intern', 'finish']
    }
])
}