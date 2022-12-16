const inquirer = require("inquirer")
const mysql = require("mysql")
const mysql2 = require("mysql2")
const consoleTable = require("console.table");

const connection = require('./config/connection')