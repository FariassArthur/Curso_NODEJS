const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  const product = [
    {
      type: "shirt",
      color: "red",
      price: 19.9,
    },
    {
      type: "leg",
      color: "blue",
      price: 9.9,
    },
    {
      type: "t-shirt",
      color: "green",
      price: 29.9,
    },
  ];

  res.render("home", { product: product });
});

app.listen(3000, () => {
  console.log("App funcionando!");
});
