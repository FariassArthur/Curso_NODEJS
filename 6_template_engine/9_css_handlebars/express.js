const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  pastialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"))
//define a pasta dos arquivos estáticos(todos os estaticos)

app.get("/dashboard", (req, res) => {
  const items = ["item a", "item b", "item c"];

  res.render("dashboard", { items });
});

app.get("/post", (req, res) => {
  const post = {
    title: "Aprender NodeJS",
    category: "JavaScript",
    body: "Este artigo vai te ajudar",
    comments: 4,
  };

  res.render("blogpost", { post });
});

app.get("/blog", (req, res) => {
  const posts = [
    {
      title: "Aprender Node",
      category: "JavaScript",
      body: "Teste Corpo",
      comments: 2,
    },
    {
      title: "Aprender PHP",
      category: "PHP",
      body: "Teste Corpo",
      comments: 2,
    },
    {
      title: "Aprender Python",
      category: "Python",
      body: "Teste Corpo",
      comments: 2,
    },
  ];

  res.render("blog", { posts });
});

app.get("/", (req, res) => {
  const user = {
    name: "Arthur",
    familyname: "Farias",
  };

  const auth = true;

  const approved = false;

  res.render("home", { user: user, auth, approved });
});

app.listen(3000, () => {
  console.log("App funcionando!");
});
