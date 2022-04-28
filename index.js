// TODO: Include packages needed for this application
const inquirer = require ("inquirer")
const path = require ("path")
const fs = require ("fs")
const generateMarkdown = require ("./utils/generateMarkdown")



// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
}, 
{
    type: "input",
    name: "description",
    message: "Provide a brief description of your project"
},
{
    type: "list",
    name: "license",
    message: "Choose your license",
    choices: ["GNU", "MIT", "Apache2.0", "ISC", "No License"]
},
{
    type: "input",
    name: "installation",
    message: "Here is how to install the application"
}, 
{
    type: "input",
    name: "howto",
    message: "Here is how you use the application"
},
{
    type: "input",
    name: "contribution",
    message: "How to contribute?"
}, 
{
    type: "input",
    name: "testing",
    message: "How to test this app"
},

{
    type: "input",
    name: "email",
    message: "What is your email"
},

{
    type: "input",
    name: "github",
    message: "What is your Github username"
}];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync (path.join(fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
      writeToFile("./Output/README.md", generateMarkdown({...answers}))  
    })
}

// Function call to initialize app
init();
