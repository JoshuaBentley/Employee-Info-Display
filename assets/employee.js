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
  