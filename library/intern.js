// Requires the employee file because the intern has the basic employee questions as well as the intern-specific questions.
const employee = require('./employee');

// extends here makes the intern class a child of the employee class.
class intern extends employee {
    // Sets up the constructor
    constructor(name, id, email, school) {
        // Super here calls from the parent class which is employee.
        super(name, id, email);
        // This is adding the intern specific stuff 
        this.school = school
    }
    returnSchool() {
        return this.school
    };
    returnRole() {
        return 'intern'
    }
}

// Exporting the file
module.exports = intern;