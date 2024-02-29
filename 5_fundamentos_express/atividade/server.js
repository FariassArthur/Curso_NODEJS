const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const rotas = require("./router/rotas.js")

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static("public"))

const basePath = path.join(__dirname, "html");

app.use("/", rotas);

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log("rodando server");
  });