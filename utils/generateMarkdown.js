function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}


// function to generate markdown for README (file format function)
function generateMarkdown(data) {
  return `# ${data.title}
  [![GitHub contributors](https://img.shields.io/github/contributors/${data.username}/${data.title}.svg)](https://GitHub.com/${data.username}/${data.title}/graphs/contributors/)
  [![Build Status](https://img.shields.io/github/forks/${data.username}/${data.title}.svg)](https://github.com/${data.username}/${data.title}/network/)
  [![Build Status](https://img.shields.io/github/stars/${data.username}/${data.title}.svg)](https://github.com/${data.username}/${data.title}/)
  [![GitHub issues](https://img.shields.io/github/issues/${data.username}/${data.title}.svg)](https://GitHub.com/${data.username}/${data.title}/issues/)
  ${renderLicenseBadge(data.license)}


## Description

${data.description}

## Table of Contents 

* [Screenshot](#screenshot)

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Screenshot

![ScreenShot](https://github.com/${data.username}/${data.title}/${data.screenshot})

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}


  
## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}/).
`;
}

module.exports = generateMarkdown;
