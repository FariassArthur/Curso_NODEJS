const { Client, Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "cadastro",
  password: "261014",
  port: 5432,
  max: 20, // Número máximo de conexões no pool
  idleTimeoutMillis: 30000, // Tempo máximo em milissegundos que uma conexão pode ficar ociosa antes de ser fechada
  connectionTimeoutMillis: 2000, // Tempo máximo em milissegundos para estabelecer uma conexão com o banco de dados
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Erro ao obter cliente do pool", err);
  }
  console.log("Conectado ao banco de dados PostgreSQL");
});

module.exports = pool;
