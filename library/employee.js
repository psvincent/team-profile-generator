// Setting up the initial employee class to equip to all other specific job titles.
class employee {
    // Creating initial employee contructor that will be used with all the employee child's classes as well.
    constructor(id, name, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    returnName() {
        return this.name
    }
    returnId() {
        return this.id
    }
    returnEmail() {
        return this.email
    }
    returnRole() {
        return 'Employee'
    }
}

// Exporting the file
module.exports = employee;