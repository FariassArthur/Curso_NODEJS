const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

//meu base path é o diretório raiz desse arquivo
const basePath = path.join(__dirname, "templates");

/* const checkAuth = (req, res, next) => {
  req.authStatus = true;

  if (req.authStatus) {
    console.log("Está logado");
    next()
  } else {
    console.log("Não está logado");
    next()
  }
};

app.use(checkAuth); */

app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  //leitura da tabela users e resgatar um usuário
  console.log(`Estamos buscando pelo usuário: ${id}`);

  res.sendFile(`${basePath}/index.html`);
});

app.get("/", (req, res) => {
  //req é basicamente qualquer dado enviado ou acessado pelo cliente
  //o que enviamos para o usuário

  res.sendFile(`${basePath}/index.html`);
}); //primeiro argumento a url

app.listen(port, () => {
  console.log("rodando server");
});
