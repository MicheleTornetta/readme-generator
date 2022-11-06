const generateMarkdown = require("./utils/generateMarkdown");

function test() {
    const correctAnswer = `# TEST TITLE

[![License: MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents 
- [Application Image](#application-image)
- [Installation Instructions](#installation)
- [Instructions](#instructions--usage)
- [Usage Video](#usage-video)
- [License](#license)
- [Credits](#credits)
- [Application Test](#application-test)
- [Questions](#questions)

## Application Image 
![Application Image](screenshot)

## Installation Instructions
test installation

## Instructions
instructions

## Usage Video
An example of how it works can be viewed here: 
![Application Gif](video.gif)

## License 
A short, permissive software license. Basically, you can do whatever you want as long as you include the original copyright and license notice in any copy of the software/source.  There are many variations of this license in use.

## Credits 
test

## Application Test
applicationTest

## Questions
If you would like to contribute or you simply have questions, please visit: 

https://github.com/username

or email me at:
email
`;

    const result = generateMarkdown({
        title: 'TEST TITLE',
        description: 'TEST DESC',
        screenshot: 'screenshot',
        installation: 'test installation',
        instructions: 'instructions',
        usageVideo: 'video.gif',
        license: 'MIT License',
        contributorsSourcesTutorials: 'test',
        applicationTest: 'applicationTest',
        username: 'username',
        email: 'email',
    });

    if(result !== correctAnswer) {
        console.log('TEST FAILED!!!!');
    }
    else {
        console.log('Test success :)');
    }
}

test();