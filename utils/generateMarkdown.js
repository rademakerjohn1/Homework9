function generateProjectUrl(github, title) {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}

function renderLicenseBadge(license, github, title) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`;
  }
  return ''
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `### License

This project is licensed under the ${license} license.`
    )
  }
  if (license === "None") {
    return (
      `### License

This project is unlicensed.`
    )
  }
}

function renderAvatar(github) {
  return `<img src="https://github.com/${github}.png" width="50"></img>`;
}

function generateMarkdown(data) {
  return `
# ${(data.title)}
${renderLicenseBadge(data.license, data.github, data.title)}
${generateProjectUrl(data.github, data.title)}


## Description
${data.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Questions](#Questions)
---
### Installation
The following command will install the project's dependencies:

\`\`\`
${data.installation}
\`\`\`
---
### Usage
The following command will initiate the project:

\`\`\`
${data.usage}
\`\`\`
---
${renderLicenseSection(data.license)}
---
### Contributing

${data.contributing}
---
### Questions
Please contact ${data.email} for any questions.

${renderAvatar(data.github)}
`;
}

module.exports = generateMarkdown;
