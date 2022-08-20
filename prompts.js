const { random } = require("superb");

module.exports = [
  {
    name: "name",
    message: "Project Name",
    default: "{outFolder}",
  },
  {
    name: "description",
    message: "Project Description",
    default: `My ${random()} WEAVV CSS project`,
  },
  {
    name: "author",
    type: "string",
    message: "Author Name",
    default: "{gitUser.name}",
    store: true,
  },
  {
    name: "pm",
    message: "Choose a Package Manager",
    choices: [
      { name: "Npm", value: "npm" },
      { name: "Yarn", value: "yarn" },
    ],
    type: "list",
    default: "npm",
  },
];
