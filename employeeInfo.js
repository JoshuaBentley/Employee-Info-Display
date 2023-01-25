const inquirer = require('inquirer')
const fs = require('fs')

const questions = [ 
    {
        type: 'input',
        name: 'EmployeeName',
        message: "What is the name of this employee?"
    },
    {
        type: 'list',
        name: 'position',
        message: 'What is there position?',
        choices: ['Engineer', 'Manager', 'Intern']
    }
 ]

 inquirer.prompt(questions) 
    .then((response) => {
    switch (response.position) {
        case "Engineer":
            engineer()
            break
        case "Manager":
            manager()
            break
        case "Intern":
            intern()
            break    
        
    }})

    function engineer() {
        inquirer.prompt([
        {
            type: "input",
            name: "engineerID",
            message: "What is your Engineer's employee ID number?"
        },
        {
            type: "input",
            name: "egineerEmail",
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
            name: "managerID",
            message: "What is your Manager's employee ID number?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is your Manager's email address?"
        },
        {
            type: "input",
            name: "managerGitHub",
            message: "What is your Manager's GitHub profile?"
        }
    ])
    }

    function intern() {
        inquirer.prompt([
        {
            type: "input",
            name: "internID",
            message: "What is your Intern's employee ID number?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is your Intenr's email address?"
        },
        {
            type: "input",
            name: "internGitHub",
            message: "What school does your Intern go to?"
        }
    ])
    }