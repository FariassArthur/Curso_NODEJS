const express = require("express")
const app = express()
const port = 3000

const path = require("path")

//meu base path é o diretório raiz desse arquivo
const basePath = path.join(__dirname, "templates")

app.get("/", (req, res) => {
    //req é basicamente qualquer dado enviado ou acessado pelo cliente
    //o que enviamos para o usuário

    res.sendFile(`${basePath}/index.html`)
}) //primeiro argumento a url

app.listen(port, () => {
    console.log("rodando server")
})