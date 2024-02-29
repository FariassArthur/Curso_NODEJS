const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

const users = require("./users");

//ler o body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//arquivos estáticos
app.use(express.static("public"))

const basePath = path.join(__dirname, "templates");

app.use("/users", users);

app.get("/", (req, res) => {
  //req é basicamente qualquer dado enviado ou acessado pelo cliente
  //o que enviamos para o usuário

  res.sendFile(`${basePath}/index.html`);
}); //primeiro argumento a url

//404
app.use((req, res, next) => {
  res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
  console.log("rodando server");
});
