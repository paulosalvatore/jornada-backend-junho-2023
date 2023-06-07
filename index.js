const express = require("express");
const app = express();

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

app.listen(3000, function () {
  console.log("Aplicando rodando em http://localhost:3000");
});
