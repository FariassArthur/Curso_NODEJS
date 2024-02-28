const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

//ler o body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//meu base path é o diretório raiz desse arquivo
const basePath = path.join(__dirname, "templates");

app.get("/users/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

app.post("/users/save", (req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const age = req.body.age;

  console.log(`O nome do usuário é: ${name} e tem a idade: ${age}`);

  res.sendFile(`${basePath}/userform.html`);
});

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
