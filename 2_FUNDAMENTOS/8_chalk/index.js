const chalk = require("chalk");

const nota = 5;

if (nota >= 6) {
  console.log(chalk.green("Parabéns, você passou"));
} else {
  console.log(chalk.red("Que pena, você reprovou"));
}
