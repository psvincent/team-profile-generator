// Requiring the necessary files to build the website
const manager = require('../library/manager');
const engineer = require('../library/engineer');
const intern = require('../library/intern');
let cards = [];


// The teamSite function adds a team card after it has been made by the user.  it uses the switch case to cycle through the different team members ands joins them all together when the user is done.
function teamSite(teamCards) {
    for(let i = 0; i < teamCards.length; i++) {
        const siteBuild = teamCards[i];
        switch(siteBuild.returnRole()) {
            case 'manager':
                const newManager = new manager(siteBuild.name, siteBuild.id, siteBuild.email, siteBuild.officeNumber);
                cards.push(managerBuild(newManager));
                break;
            case 'engineer':
                const newEngineer = new engineer(siteBuild.name, siteBuild.id, siteBuild.email, siteBuild.officeNumber);
                cards.push(engineerBuild(newEngineer));
                break;
            case 'intern':
                const newIntern = new intern(siteBuild.name, siteBuild.id, siteBuild.email, siteBuild.officeNumber);
                cards.push(internBuild(newIntern));
                break;
        }
    }
    return cards.join('');
}



// This implements html and bootstrap to build the manager card.
let managerBuild = (manager) => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header bg-primary text-white">
    <h2 class="card-title">${manager.returnName()}</h2>
    <h3 class="card-text">${manager.returnRole()}</h3>
    </div>
    <div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">ID: ${manager.returnId()}</li>
    <li class="list-group-item">Email: ${manager.returnEmail()}</li>
    <li class="list-group-item">Office Number: ${manager.returnOfficeNumber()}</li>
    </ul>
    </div>
    </div>
    `
}

// This implements html and bootstrap to build the engineer card.
let engineerBuild = (engineer) => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header bg-primary text-white">
    <h2 class="card-title">${engineer.returnName()}</h2>
    <h3 class="card-text">${engineer.returnRole()}</h3>
    </div>
    <div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">ID: ${engineer.returnId()}</li>
    <li class="list-group-item">Email: ${engineer.returnEmail()}</li>
    <li class="list-group-item">Office Number: ${engineer.returnGithub()}</li>
    </ul>
    </div>
    </div>
    `
}

// This implements html and bootstrap to build the intern card.
let internBuild = (intern) => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header bg-primary text-white">
    <h2 class="card-title">${intern.returnName()}</h2>
    <h3 class="card-text">${intern.returnRole()}</h3>
    </div>
    <div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">ID: ${intern.returnId()}</li>
    <li class="list-group-item">Email: ${intern.returnEmail()}</li>
    <li class="list-group-item">Office Number: ${intern.returnSchool()}</li>
    </ul>
    </div>
    </div>
    `
}




// This puts the cards into a html boiler plate and adds boostrap to the html file.
function siteOutline(teamCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset= "UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <title>TEAM</title>
    </head>
    <body>
    <h1 class="text-center bg-danger text-white">My Team</h1>
    <div class="d-flex justify-content-center">
    ${teamSite(teamCards)}
    </div>
    </body>
    </html>
    `
};


// Exports siteOutline
module.exports = siteOutline;