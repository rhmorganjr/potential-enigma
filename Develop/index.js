const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fileName = 'README.md';


// array of questions for user
//Description, Installation, Usage, Contributing, and Tests
const questions = [
  { name: 'title', message:'What is your Title?'},
  { name: 'description', message: 'Provide a description of your project'},
  { name: 'install', message: 'What are the installation instructions?'},
  { name: 'usage', message: 'What are any usage instructions?'},
  { name: 'contribute', message: 'Would you like to contribute to the project?'},
  { name: 'tests', message: 'Would you like to run the tests?'}
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
      console.log(answers);
    });
}

// function call to initialize program
init();
