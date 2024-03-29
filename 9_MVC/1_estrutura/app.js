const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const conn = require("./db/conn");

//models
const Task = require("./models/Task");

//routes
const tasksRoutes = require('./routes/tasksRoutes')

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

app.use('/tasks', tasksRoutes)

app.use('/', (req, res, next) => {
  res.redirect('/tasks');
  next()
});

conn
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("App rodando na porta 3000");
    });
  })
  .catch((err) => console.log("Error no sync", err));
