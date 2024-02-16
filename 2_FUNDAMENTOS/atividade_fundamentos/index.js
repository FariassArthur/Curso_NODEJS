const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "name",
      message: "Qual o seu nome?",
    },
    {
      name: "age",
      message: "Qual sua idade?",
    },
  ])
  .then((answers) => {
    console.log(
      chalk.bgYellow.black(
        `Seu nome é: ${answers.name} e sua idade é ${answers.age}`
      )
    );
  })
  .catch((err) =>
    console.log(`Ocorreu um erro na aplicação, seu erro é ${err}`)
  );
