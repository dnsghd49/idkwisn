function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

function forks(license) {
  if (license !== "None") {
    return `[![Build Status](https://img.shields.io/github/forks/dnsghd49/goodReadMeGen.svg)](https://github.com/dnsghd49/goodReadMeGen)`
  }
  return ''
}

function stars(license) {
  if (license !== "None") {
    return `[![Build Status](https://img.shields.io/github/stars/dnsghd49/goodReadMeGen.svg)](https://github.com/dnsghd49/goodReadMeGen)`
  }
  return ''
}


// function to generate markdown for README (file format function)
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${forks(data.license)}
  ${stars(data.license)}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

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

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
