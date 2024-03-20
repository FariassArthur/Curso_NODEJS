const express = require("express");
const exphbs = require("express-handlebars");
const pool = require('./db/conn'); // Importa o pool de conexão

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

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

  pool
    .query(query)
    .then(() => console.log("Dados inseridos com sucesso na tabela books"))
    .catch((err) => console.error("Erro ao inserir dados na tabela books", err))
    .finally(() => {});

  res.redirect("/");
});

app.get("/books", (req, res) => {
  const query = {
    text: "SELECT * FROM books"
  };

  pool
    .query(query)
    .then((result) => {
      console.log("Resultados da consulta:");
      console.table(result.rows);

      const data = {
        books: result.rows, // Passando apenas os dados da consulta para a view
      };

      res.render("books", data);
    })
    .catch((err) => console.error("Erro ao executar consulta", err));
});

app.get("/books/:id", (req, res) => {
  const id = req.params.id;

  const query = {
    text: "SELECT * FROM books WHERE id = $1",
    values: [id]
  };

  pool
    .query(query)
    .then((result) => {
      console.table(result.rows);
      const data = {
        books: result.rows,
      };

      res.render("book", data);
    })
    .catch((err) => console.log("Erro ao consultar por id", err));
});

app.get("/books/edit/:id", (req, res) => {
  const id = req.params.id;

  const query = {
    text: "SELECT  * FROM books WHERE id = $1",
    values: [id]
  };

  pool
    .query(query)
    .then((result) => {
      console.table(result.rows);

      const data = {
        book: result.rows,
      };

      res.render('editbook', data)
    })
    .catch((err) => console.log("Erro na edição do id", err));
});

app.post('/books/updatebook', (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const pages = req.body.pages;

  const query = {
    text: 'UPDATE books SET title = $1, pages = $2 WHERE id = $3',
    values: [title, pages, id]
  };

  pool
    .query(query)
    .then((result) => {
      console.log("Livro atualizado com sucesso:", result.rowCount);
      res.redirect('/books');
    })
    .catch((err) => console.error("Erro na atualização do livro:", err));
});

app.post('/books/remove/:id', (req, res) => {
  const id = req.params.id;

  const query = {
    text: 'DELETE FROM books WHERE id = $1',
    values: [id]
  };

  pool
    .query(query)
    .then(() => {
      res.redirect('/books');
    })
    .catch((err) => console.error("Erro na remoção do livro", err));
});

app.listen(3000, () => {
  console.log("rodando porta");
});
