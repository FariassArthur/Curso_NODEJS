const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual a sua linguagem preferida?", (language) => {
  if (language === "HTML") {
    console.log("Isso nem linguagem é");
  } else {
    console.log(`A sua linguagem preferida é ${language}`);
  }
  readline.close();
});
