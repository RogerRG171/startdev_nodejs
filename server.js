const express = require("express");

const app = express();

const clientes = [
  { id: 1, name: "Maria", status: true },

  { id: 2, name: "Joao", status: false },
];

app.get("/clientes", function (req, res) {
  res.status(200).send(clientes);
});

app.get("/clientes/:id", function (req, res) {
  const { id } = req.params;
  const cliente = clientes.filter((c) => c.id == id);

  res.status(200).send(cliente);
});

app.listen(3005, () => {
  console.log("servidor rodando na porta 3005");
});
