const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
    //req é basicamente qualquer dado enviado ou acessado pelo cliente
    //o que enviamos para o usuário

    res.send("Olá mundo")
}) //primeiro argumento a url

app.listen(port, () => {
    console.log("rodando server")
})