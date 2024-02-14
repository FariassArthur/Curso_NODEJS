const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "p1",
      message: "Qual a sua nota?",
    },
    {
      name: "p2",
      message: "Você estudou?",
    },
  ])
  .then((answers) => {
    if(answers.p2.toLowerCase() === "nao") {
        console.log(`Você não estudou e tirou : ${answers.p1}. De qualquer forma estude na próxima`)
    } else {
        console.log(`Você estudou e tirou: ${answers.p1}. Parabéns, você se esforçou`)
    }
  })
  .catch((err) => console.log(err));
