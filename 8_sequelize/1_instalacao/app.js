const express = require("express");
const exphbs = require("express-handlebars");
const conn = require('./db/conn'); // Importa o pool de conexão

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



app.listen(3000, () => {
  console.log("rodando porta");
});
