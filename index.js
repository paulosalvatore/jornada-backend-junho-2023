const express = require("express");
const app = express();

// Indicamos que o Express deve considerar o Body
// das requisições como JSON
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/oi", function (req, res) {
  res.send("Olá, mundo!");
});

// Lista de heróis
const herois = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];
//              0                    1                2

// Read All - [GET] /herois
app.get("/herois", function (req, res) {
  res.send(herois);
});

// Create - [POST] /herois
app.post("/herois", function (req, res) {
  // console.log(req.body, typeof req.body);

  const nome = req.body.nome;
  // console.log(nome, typeof nome);

  herois.push(nome);

  res.send("Item criado com sucesso!");
});

// Read By Id - [GET] /herois/:id
app.get("/herois/:id", function (req, res) {
  const id = req.params.id;

  const item = herois[id - 1];

  res.send(item);
});

// Update - [PUT] /herois/:id
app.put("/herois/:id", function (req, res) {
  const id = req.params.id;

  const novoNome = req.body.nome;

  herois[id - 1] = novoNome;

  res.send("Item atualizado com sucesso!");
});

app.listen(3000, function () {
  console.log("Aplicando rodando em http://localhost:3000");
});
