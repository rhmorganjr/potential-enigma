// function to generate markdown for README
function generateMarkdown(data) {

  let readme = `# ${data.title}

  ## Description
  ${data.description}


  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)


  ## Installation
  ${data.installion}


  ## Usage
  ${data.usage}


  ## Credits
  ${data.contribute}


  ## License


  ## Badges


  ## Contributing


  ## Tests
  `;

  return readme;
}

module.exports = generateMarkdown;
