const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const cTable = require('console.table');
const database = require('./db/dbfunctions')


function loadPrompts () {
    return inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Choose an option.",
            choices: [
                
                 "All Departments",
                 "All Roles",
                 "All Employees",
                 "Add Department",
                 "Add Role",
                 "Add Employee",
                 "Update Employee Role",
                 "Quit"
            ]
        }
    ]).then(response => {
        let choice = response.choice 
            switch(choice) {
                case "View All Departments":
                    getDepartments()
                    break;

                    case "View All Roles":
                    getRoles()
                    break;

                    case "View All Employees":
                    getEmployees()
                    break;

                    case "Add A Department":
                    addDepartment()
                    break;

                    case "Add A Role":
                    addRole()
                    break;

                    case "Add An Employee":
                    addEmployee()
                    break;

                    case "Update Employee Role":
                    updateRole()
                    break;

                    case "Quit":
                        console.log("Bye")
                        quit();
                        break;

            }
        
    })
}
function getDepartments() {
    database.displayDepartments()
    .then(([rows]) => {
        let departments = rows
        console.log("\n")
        console.table(departments)
    })
    .then(() => loadPrompts())
   
}
function getRoles() {
    database.displayRoles()
    .then(([rows]) => {
        let roles = rows
        console.log("\n")
        console.table(roles)
    })
    .then(() => loadPrompts())
   
}

function getEmployees() {
    database.displayEmployees()
    .then(([rows]) => {
        let employees = rows
        console.log("\n")
        console.table(employees)
    })
    .then(() => loadPrompts())
   
}

loadPrompts()