// Requires the employee file because the manager has the basic employee questions as well as the manager-specific questions.
const employee = require('./employee');

// extends here makes the manager class a child of the employee class.
class manager extends employee {
    // Sets up the constructor
    constructor(name, id, email, officeNumber) {
        // Super here calls from the parent class which is employee.
        super(id, name, email)
        // This is adding the manager specific stuff
        this.officeNumber = officeNumber
    }
    returnOfficeNumber() {
        return this.officeNumber
    }
    returnRole() {
        return "manager"
    }
}

// Exporting the file
module.exports = manager;
