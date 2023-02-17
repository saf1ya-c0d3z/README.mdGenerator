// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![licensebadge](https://img.shields.io/badge/License-` +encodeURIComponent(license)+ `-brightgreen)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license !== 'None' ? `\n* [License](#license)\n` : '';


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  
  This project is licensed with ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
   ${renderLicenseLink(data.license)}
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing 
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions please feel free to contact me at [${data.email}](mailto:${data.email}) or check out my gitHub profile at [${data.github}](https://github.com/${data.github})
  `

  ;

}

module.exports = generateMarkdown;

