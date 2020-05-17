const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fileName = 'README.md';


// array of questions for user
// Name, Email, Github, License, Description, Installation, Usage, Contributing, and Tests
const projectQuestions = [
  { name: 'name', message:'What is your name?'},
  { name: 'email', message: 'What is your email address?'},
  { name: 'github', message: 'What is your Github id?'},
  { name: 'license', message: 'What license would you like to use?'},
  { name: 'title', message:"What is your project's title?"},
  { name: 'description', message: 'Provide a description of your project'},
  { name: 'installation', message: 'What are the installation instructions?'},
  { name: 'usage', message: 'What are any usage instructions?'},
  { name: 'contribute', message: 'Would you like to contribute to the project?'},
  { name: 'tests', message: 'Would you like to run the tests?'}
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), err => {
    if (err) throw err;

    console.log('Done');
  });
}

// function to get user's input
function getInput() {
  inquirer
    .prompt(projectQuestions)
    .then(answers => {
      //console.log(answers);
      writeToFile(fileName, answers);
    });
}

// function to initialize program
function init() {

  // get answers to questions
  getInput();
}

// function call to initialize program
init();
