// TODO: Include packages needed for this application
   // https://www.youtube.com/watch?v=TlB_eWDSMt4
// TODO: Create an array of questions for user input

//To write to a text file & create markdown
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');




let output = "";

//Create a template for the information
/*const page = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${#Title}</title>
</head>
<body>
  <h1>${music.album}</h1>
  <h2>${music.title}</h2>
  <h2>${music.artist}</h2>
</body>
</html>`;*/




const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?', 
},
{
    type: 'input',
    name: 'description',
    message: 'Please provide a short description explaining what, why and how your site works.', 
},
{
    type: 'input',
    name: 'installation',
    message: 'Please provide the installation instructions for your application.', 
},
{
    type: 'input',
    name: 'instructionsAndUsage',
    message: 'Please provide instructions and examples of how your application is used.', 
},
{
    type: 'input',
    name: 'screenshot',
    message: 'Please provide the full URL to a screenshot of your application by typing in the file path.', 
},
{
    type: 'list',
    name: 'license',
    message: 'Please choose the license you want to use.', 
    choices: [
        'None',
        'Apache License 2.0',
        'GNU General Public License v3.0',
        'MIT License',
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        'Boost Software License 1.0',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU Lesser General Public License v2.1',
        'Mozilla Public License 2.0',
        'The Unlicense',
    ]
},
{
    type: 'input',
    name: 'contributorsSourcesTutorials',
    message: 'Please list any other contributors and/or site your sources and any tutorials with links.', 
},
{
    type: 'input',
    name: 'applicationTest',
    message: 'Please include any tests for the application.',
},
{
    type: 'input',
    name: 'username',
    message: 'Please enter your username.',
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.',
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();




inquirer.prompt(questions).then((answers) => {
    fs.writeFile('readmetest.md', generateMarkdown(answers), 'utf8', ()=> {

    });
  });