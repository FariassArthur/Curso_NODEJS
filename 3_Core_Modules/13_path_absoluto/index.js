const path = require("path")

//patth absoluto
console.log(path.resolve("texte.txt"))

//formar path
const midfolder = "relatorios"
const fileName = "matheus.txt"

const finalPath = path.join("/", "arquivos", midfolder, fileName)

console.log(finalPath)