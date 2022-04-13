// Requires the employee file because the engineer has the basic employee questions as well as the engineer-specific questions.
const employee = require('./employee');

// extends here makes the engineer class a child of the employee class.
class engineer extends employee {
    // Sets up the constructor 
    constructor(name, id, email, github) {
        // Super here calls from the parent class which is employee.
        super(name, id, email);
        // This is adding the engineer specific stuff 
        this.github = github
    }
    returnGithub() {
        return this.github
    };
    returnRole() {
        return 'engineer';
    }
}

// Exporting the file
module.exports = engineer;