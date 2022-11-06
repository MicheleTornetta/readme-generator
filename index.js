
//To write to a text file & create markdown
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

//An array of questions for user input

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
    name: 'screenshot',
    message: 'Please provide the full URL to a screenshot of your application by typing in the file path.', 
},
{
    type: 'input',
    name: 'installation',
    message: 'Please provide the installation instructions for your application.', 
},
{
    type: 'input',
    name: 'instructions',
    message: 'Please provide instructions explaining how your application is used.', 
},
{
    type: 'input',
    name: 'usageVideo',
    message: 'Please provide a video example url showing how your application works.', 
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

//Prompts the questions & calls the answers
inquirer.prompt(questions).then((answers) => {
    fs.writeFile('readme.md', generateMarkdown(answers), 'utf8', ()=> {

    });
  });