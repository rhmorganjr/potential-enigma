// function to generate markdown for README
function generateMarkdown(data) {

  let readme = `# ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.installion}
  `;

  return readme;
}

module.exports = generateMarkdown;
