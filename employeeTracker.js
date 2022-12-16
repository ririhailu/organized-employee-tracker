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