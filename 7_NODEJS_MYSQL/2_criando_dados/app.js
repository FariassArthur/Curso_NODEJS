const express = require("express");
const exphbs = require("express-handlebars");
const { Client } = require("pg");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "cadastro",
  password: "261014",
  port: 5432, // Porta padrão do PostgreSQL
});

client
  .connect()
  .then(() => console.log("Conectado ao banco de dados PostgreSQL"))
  .catch((err) => console.error("Erro ao conectar ao banco de dados", err));

app.listen(3000, () => {
  console.log("rodando porta");
});

app.get("/", (req, res) => {
  console.log("rota funcionando");
  res.render("home");
});

app.post("/books/insertbook", (req, res) => {
  const title = req.body.title;
  const pages = req.body.pages;

  const query = {
    text: "INSERT INTO books (title, pages) VALUES ($1, $2)",
    values: [title, pages],
  };

  client
    .query(query)
    .then(() => console.log("Dados inseridos com sucesso na tabela books"))
    .catch((err) => console.error("Erro ao inserir dados na tabela books", err))
    .finally(() => {
    });

    res.redirect('/')
});

// Você pode usar o objeto 'client' para executar consultas SQL

// Exemplo de consulta
// client.query('SELECT NOW()', (err, res) => {
//     if (err) {
//         console.error('Erro ao executar consulta', err);
//     } else {
//         console.log('Resultado da consulta:', res.rows);
//     }
// });

// Lembre-se de fechar a conexão quando não precisar mais
// client.end();
