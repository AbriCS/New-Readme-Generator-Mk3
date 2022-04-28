// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license !=="No License"){
  return `<img src="https://img.shields.io/badge/license-${license}-orange.svg"/>`
    }
    return ""
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if(license !=="No License"){
     return `* [License](#license)`
    }
    return ""
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) { 
    if(license !=="No License"){
  return `## License
  
  This project is Licensed under ${license}.`
  }
  return ""}
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
     ${renderLicenseBadge(data.license)} 
  
     ## Description
     ${data.description} 
  
     ## Table of Contents
  
     * [Installation](#installation)
     * [Usage](#usage)
     ${renderLicenseLink(data.license)}
     * [Contributing](#contributing)
     * [Test](#test)
     * [Questions](#questions)
     
  
     ## Installation
     ${data.installation}
  
     ## Usage
     ${data.howto}
  
     ${renderLicenseSection(data.license)}
  
    ## Contributing
    ${data.contribution}
  
    ## Test
    ${data.testing}
  
    ## Questions
    If you have any questions about the project or the Repo, please feel free to contact me at ${data.email}
    You can find more of my projects at [${data.github}](https://github.com/${data.github})
  
  `}
  
  module.exports = generateMarkdown