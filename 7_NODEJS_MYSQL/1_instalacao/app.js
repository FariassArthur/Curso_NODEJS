const express = require('express');
const exphbs = require("express-handlebars");
const { Client } = require("pg");

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log("rota funcionando");
    res.render('home');
});

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'cadastro',
    password: '261014',
    port: 5432, // Porta padrão do PostgreSQL
});

client.connect()
    .then(() => console.log('Conectado ao banco de dados PostgreSQL'))
    .catch(err => console.error('Erro ao conectar ao banco de dados', err));
    

app.listen(3000)

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

