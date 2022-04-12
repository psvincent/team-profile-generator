// Setting up the initial employee class to equip to all other specific job titles.
class employee {
    constructor(id, name, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    employeeName() {
        return this.name
    }
    employeeId() {
        return this.id
    }
    employeeEmail() {
        return this.email
    }
    employeeRole() {
        return 'Employee'
    }
}

module.exports = employee;