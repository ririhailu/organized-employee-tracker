const inquirer = require("inquirer")
const mysql = require("mysql")
const mysql2 = require("mysql2")
const consoleTable = require("console.table");

const connection = require('./config/connection')


//Function that starts the app and prompt the questions
function startApp() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees By Department",
        "View departments",
        "View roles",
        "Add department",
        "Add role",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "EXIT"
      ]
    })

    .then(function(answer) {
      switch (answer.action) {
      case "View All Employees":
        viewEmployees();
        break;
  
      case "View All Employees By Department":
        viewEmployeesByDept();
        break;
  
      case "View departments":
        viewDept();
        break;
      
      case "View roles":
        viewRoles();
        break;
  
      case "Add Employee":
        addEmployee();
        break;
    
      case "Add department":
        addDept();
        break;
      
      case "Add role":
        addRole();
        break;
    