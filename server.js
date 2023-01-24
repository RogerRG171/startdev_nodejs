const express = require("express");

const app = express();

const clientes = [
  { id: 1, name: "Maria", status: true },

  { id: 2, name: "Joao", status: false },
];

app.get("/clientes", function (req, res) {
  res.status(200).send(clientes);
});

app.listen(3005, () => {
  console.log("servidor rodando na porta 3005");
});
