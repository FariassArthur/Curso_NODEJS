const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodemvc", "postgres", "261014", {
  host: "localhost",
  dialect: "postgres",
});

try {
  sequelize.authenticate();
  console.log("Conectamos ao banco");
} catch (err) {
  console.error("Não foi possível conectar", err);
}

module.exports = sequelize;
