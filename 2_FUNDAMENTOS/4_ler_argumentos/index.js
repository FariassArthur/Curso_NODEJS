//nome

/* Importante entender que começa do terceiro argumento */

console.log(process.argv);
const args = process.argv.slice(2);

console.log(args);

const nome = args[0].split("=")[1]
console.log(nome)
