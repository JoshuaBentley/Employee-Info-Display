const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const manager = require('./lib/manager')
const engineer = require('./lib/engineer')
const intern = require('./lib/intern') 

const employeeIDs = []
const employeeNames = []

const employeeQuestions = () => {
    const createEmployee =() => {
        inquirer.prompt([
            {
                type: 'list',
                name: 'position',
                message: 'What is thid employees position?',
                choices: ['Engineer', 'Manager', 'Intern', 'I have no more employees to add']
            }
        ])
        .then((response) => {
            switch (response.position) {
            case "Egineer":
                engineer()
                break
            case "Manager":
                manager()
                break
            case "Intern":
                intern()
                break
            case "I have no more employees to add":
                outOfEmployees()
                break    
            }
        })
    }
    
    function engineer() {
        inquirer.prompt([
            {
            type: "input",
            name: "engineerName",
            message: "What is your engineer's Namne?",
            validate: (answer) => {
                if (answer !== ""){
                    return true
                }
                return "You need to enter a name!"
            }
            },
            {
            type: "input",
            name: "engineerID",
            message: "What is your engineer's employee ID number?",
            validate: (answer) => {
                const id  = answer.match(/^[1-9]\d*$/)
                if (id){
                    if (employeeIDs.includes(answer)) {
                    return "This ID belongs to another employee"
                    } else {
                        return true
                    }        
                }
                return "Please enter a number greater then zero"
            }
            },
            {
            type: "input",
            name: "engineerEmail",
            message: "What is the email address for your engineer?"
            },
            {
            type: "input",
            name: "engineerGitHub",
            message: "What is the GitHub profile for your engineer?"
            }
        ])
    }

    function manager() {
        inquirer.prompt([
            {
            type: "input",
            name: "managerName",
            message: "What is your manager's Namne?",
            validate: (answer) => {
                if (answer !== ""){
                    return true
                }
                return "You need to enter a name!"
            }
            
            },
            {
            type: "input",
            name: "managerID",
            message: "What is your manager's employee ID number?",
            validate: (answer) => {
                const id  = answer.match(/^[1-9]\d*$/)
                if (id){
                    if (employeeIDs.includes(answer)) {
                    return "This ID belongs to another employee"
                    } else {
                        return true
                    }        
                }
                return "Please enter a number greater then zero"
            }
            },
            {
            type: "input",
            name: "managerEmail",
            message: "What is the email address for your manager?"
            },
            {
            type: "input",
            name: "managerGitHub",
            message: "What is the GitHub profile for your manager?"
            }
        ])
    }

    function intern() {
        inquirer.prompt([
            {
            type: "input",
            name: "internName",
            message: "What is your intern's Namne?",
            validate: (answer) => {
                if (answer !== ""){
                    return true
                }
                return "You need to enter a name!"
            }
            },
            {
            type: "input",
            name: "internID",
            message: "What is your intern's employee ID number?",
            validate: (answer) => {
                const id  = answer.match(/^[1-9]\d*$/)
                if (id){
                    if (employeeIDs.includes(answer)) {
                    return "This ID belongs to another employee"
                    } else {
                        return true
                    }        
                }
                return "Please enter a number greater then zero"
            }
            },
            {
            type: "input",
            name: "internEmail",
            message: "What is the email address for your intern?"
            },
            {
            type: "input",
            name: "internGitHub",
            message: "What is the GitHub profile for your intern?"
            }
        ])
    }
}


 employeeQuestions()