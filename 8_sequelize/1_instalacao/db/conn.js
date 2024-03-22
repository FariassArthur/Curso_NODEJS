const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodesequelize2", "postgres", "261014", {
  host: "localhost",
  dialect: "postgres",
});

try {
  sequelize.authenticate();
  console.log("Conectamos com sucesso utilizando sequelize");
} catch (err) {
  console.log("Não foi possível conectar no banco de dados", err);
}

module.exports = sequelize;
