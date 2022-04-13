// This gets the inquirer package.
const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./library/employee');
const manager = require('./library/manager');
const intern = require('./library/intern');
const engineer = require('./library/engineer');
const teamSite = require('./src/teamSite');
teamCards = [];


// This uses inquirer to ask the user all the questions about the team manager.
const questions = () => {
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
]) .then((managerCard) => {
    const newManager = new manager(managerCard.name, managerCard.id, managerCard.email, managerCard.officeNumber)
    teamCards.push(newManager)
    switch(managerCard.newMember) {
        case 'engineer':
            engineerCard();
            break;
        case 'intern':
                internCard();
            break;
            default:
                writeToFile('dist/index.html', teamSite(teamCards))    
    }
});
};

const engineerCard = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: "What is your team's engineer name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your team's engineer  employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your team's engineer email?",
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your team's engineer GitHub username?",
    },
    {
        type: 'list',
        name: 'newMember',
        message: 'Would you like to add an engineer, an intern, or finish building your team?',
        choices: ['engineer', 'intern', 'finish']
    }
]) .then((engineerCard) => {
    const newEngineer = new engineer(engineerCard.name, engineerCard.id, engineerCard.email, engineerCard.github)
    teamCards.push(newEngineer)
    switch(engineerCard.newMember) {
        case 'engineer':
            engineerCard();
            break;
        case 'intern':
            internCard();
            break;
            default:
                writeToFile('dist/index.html', teamSite(teamCards))
    }
});
};

const internCard = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: "What is your team's intern name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your team's intern employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your team's intern email?",
    },
    {
        type: 'input',
        name: 'school',
        message: "What is your team's intern school?",
    },
    {
        type: 'list',
        name: 'newMember',
        message: 'Would you like to add an engineer, an intern, or finish building your team?',
        choices: ['engineer', 'intern', 'finish']
    }
]) .then((internCard) => {
    const newIntern = new intern(internCard.name, internCard.id, internCard.email, internCard.school)
    teamCards.push(newIntern)
    switch(internCard.newMember) {
        case 'engineer':
            engineerCard();
            break;
        case 'intern':
            internCard();
            break;
            default:
                writeToFile('dist/index.html', teamSite(teamCards))
    }
});
};

questions();

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('file written');
    });
};