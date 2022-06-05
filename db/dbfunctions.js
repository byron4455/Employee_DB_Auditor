const dbConnect = require('./connection.js');

class database {
    constructor(dbConnect) {
        this.dbConnect = dbConnect
    }
    displayDepartments() {
        return this.dbConnect.promise().query('SELECT department.id, department.name FROM employees.department')
    }
    displayRoles() {
        return this.dbConnect.promise().query('SELECT role.id, role.title, role.salary, role.department_id FROM employees.role')
    }
    displayEmployees() {
        return this.dbConnect.promise().query('SELECT employee.first_name, employee.last_name FROM employees.employee')
    }
}

module.exports = new database(dbConnect);