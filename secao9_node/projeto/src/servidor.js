const porta = 3003;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bancoDeDados = require("./bancoDeDados");
const { reduce } = require("lodash");

/*app.get('/produtos', (req, resp, next) => {
    console.log('Middleware...1');
    next()
})*/

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/produtos", (req, resp /*, next*/) => {
  resp.send(bancoDeDados.getProdutos()); // Na resposta converte o arquivo para JSON
});

app.get("/produtos/:id", (req, resp, next) => {
  resp.send(bancoDeDados.getProduto(req.params.id));
});

app.post("/produtos", (req, resp, next) => {
  const produto = bancoDeDados.salvarProdutos({
    nome: req.body.nome,
    preco: req.body.preco,
  });
  resp.send(produto); // JSON
});

app.put("/produtos/:id", (req, resp, next) => {
  const produto = bancoDeDados.salvarProdutos({
    id: req.body.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  resp.send(produto)
})

app.delete("/produtos/:id", (req, resp, next) => {
  const produto = bancoDeDados.deleteProdutos(req.params.id)
  resp.send(produto)
})

app.listen(porta, () => {
  console.log(`Servidor está executando na porta ${porta}`);
});
