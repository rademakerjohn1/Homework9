// Require Node modules
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

// Require API & Markdown script files
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

// Questions array
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },

    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },

    {
        type: "input",
        name: "description",
        message: "Describe your project:"
    },

    {
        type: "input",
        name: "installation",
        message: "Type the command that will install dependencies for this project:"
    },

    {
        type: "input",
        name: "usage",
        message: "Type the command that will run this project:"
    },

    {
        type: "list",
        name: "license",
        message: "Select a license:",
        choices: ["Apache", "GNU", "MIT", "GPL", "None"]
    },

    {
        type: "input",
        name: "contributing",
        message: "State if you are open to contributions and what your requirements are for accepting them.",
    },

    {
        type: "input",
        name: "email",
        message: "Please enter your email address for question submissions",
    },

];

function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
    });
};

function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        api.getUser(userAnswers.github).then((data) => {
            writeToFile("README.md", generateMarkdown({...userAnswers, data}))
        })
    })
}

init();
