// function to generate markdown for README
function generateMarkdown(data) {

  let readme = `# ${data.title}

  ## Description
  ${data.description}


  ## Table of Contents
  *[Installation](#installation)  
  *[Usage](#usage)  
  *[License](#license)  
  *[Badges](#badges)  
  *[Contributing](#contributing)  
  *[Tests](#tests)  
  *[Questions](#questions)  


  ## Installation
  ${data.installion}
  ${data.github}


  ## Usage
  ${data.usage}


  ## License
  ${data.license}  
  $[MIT](https://opensource.org/licenses/MIT)



  ## Badges


  ## Contributing


  ## Tests


  ## Questions
  Email: ${data.email}  
  GitHub: ${data.github}  

  `;

  return readme;
}

module.exports = generateMarkdown;
