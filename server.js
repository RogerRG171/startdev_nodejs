const express = require("express");

const app = express();
app.use(express.json());

let clientes = [
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

app.delete("/clientes/:id", function (req, res) {
  const id = Number.parseInt(req.params.id);
  const cliente = clientes.find((c) => c.id === id);
  if (cliente?.id) {
    clientes = clientes.filter((c) => c.id !== id);
    console.log(clientes);
    res.status(200).send({ message: "Cliente excluido com sucesso!" });
  } else {
    res.status(204).send();
  }
});

app.put("/clientes/:id", function (req, res) {
  const id = Number.parseInt(req.params.id);
  const novoCliente = req.body;
  const index = clientes.findIndex((c) => c.id === id);
  if (index !== -1) {
    const cliente = { id, name: novoCliente.name, status: novoCliente.status };
    clientes[index] = cliente;
    console.log(clientes);
    res.status(200).send(cliente);
  } else {
    res.status(204).send();
  }
});

app.listen(3005, () => {
  console.log("servidor rodando na porta 3005");
});
