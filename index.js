const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern') 
const generateEmployee = require('./src/createEmployee')
const { create } = require('domain')

const DIST_DIR = path.resolve(__dirname, 'dist')
const distPath = path.join(DIST_DIR, "index.html")

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
            case "Engineer":
                addEngineer()
                break
            case "Manager":
                addManager()
                break
            case "Intern":
                addIntern()
                break
            case "I have no more employees to add":
                buildEmployees()
                break    
            }
        })
    }
    
    function addEngineer() {
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
            message: "What is the email address for your engineer?",
            validate: (answer) => {
                if(answer !== "") { 
                    return true
                }
                return "You need to enter an email address for this employee"
            }
            },
            {
            type: "input",
            name: "engineerGitHub",
            message: "What is the GitHub profile for your engineer?",
            validate: (answer) => {
                if(answer !== "") { 
                    return true
                }
                return "You need to enter an GitHub for this employee"
            }
            }
        ])
        .then((response) => {
            const engineer = new Engineer(
              response.engineerName,
              response.engineerId,
              response.engineerEmail,
              response.engineerGitHub
            );
            employeeNames.push(engineer);
            employeeIDs.push(response.engineerId);
            createEmployee();
          });
    }

    function addManager() {
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
            message: "What is the email address for your manager?",
            validate: (answer) => {
                if(answer !== "") { 
                    return true
                }
                return "You need to enter an email address for this employee"
            }
            },
            {
            type: "input",
            name: "managerGitHub",
            message: "What is the GitHub profile for your manager?",
            validate: (answer) => {
                if(answer !== "") { 
                    return true
                }
                return "You need to enter an GitHub for this employee"
            }
            }
        ])
        .then((response) => {
            const manager = new Manager(
              response.managerName,
              response.managerId,
              response.managerEmail,
              response.managerGitHub
            );
            employeeNames.push(manager);
            employeeIDs.push(response.managerId);
            createEmployee();
          });
    }

    function addIntern() {
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
            message: "What is the email address for your intern?",
            validate: (answer) => {
                if(answer !== "") { 
                    return true
                }
                return "You need to enter an email address for this employee"
            }
            },
            {
            type: "input",
            name: "internSchool",
            message: "What is the name of the intern's school?",
            validate: (answer) => {
                if(answer !== "") { 
                    return true
                }
                return "You need to enter a school for this intern"
            }
            }
        ])
        .then((response) => {
            const intern = new Intern(
              response.internName,
              response.internId,
              response.internEmail,
              response.internSchool
            );
            employeeNames.push(intern);
            employeeIDs.push(response.internId);
            createEmployee();
          });
    }

    const buildEmployees = () => {
        if(!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR)
        }
        fs.writeFileSync(distPath, generateEmployee(Engineer), 'utf-8' )
    }
    
    createEmployee()
}


 employeeQuestions()