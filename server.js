const express = require("express");

const app = express();
app.use(express.json());

const clientes = [
  { id: 1, name: "Maria", status: true },

  { id: 2, name: "Joao", status: false },
];

app.get("/clientes", async function (req, res) {
  res.status(200).send(clientes);
});

app.get("/clientes/:id", async function (req, res) {
  const { id } = req.params;
  const cliente = clientes.filter((c) => c.id == id);

  if (cliente?.length > 0) {
    res.status(200).send(cliente);
  } else {
    res.status(204).send({ message: "Id não encontrado" });
  }
});

app.post("/clientes", async function (req, res) {
  const cliente = req.body;

  console.log(cliente);

  if (cliente?.id) {
    clientes.push(cliente);
    console.log(clientes);
    res.status(201).send({ message: "Cliente salvo com sucesso!" });
  } else {
    console.log(clientes);
    res.status(204).send();
  }
});

app.listen(3005, () => {
  console.log("servidor rodando na porta 3005");
});
