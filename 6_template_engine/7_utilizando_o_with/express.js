const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  const items = ["item a", "item b", "item c"];

  res.render("dashboard", { items });
});

app.get("/post", (req, res) => {
  const post = {
    title: "Aprender NodeJS",
    category:"JavaScript",
    body: "Este artigo vai te ajudar",
    comments: 4,
  }

  res.render("blogpost", {post})
})

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
