db.produtos.updateMany({
  nome: "Quarteirão com Queijo",
}, {
  $pop: {
    ingredientes: - 1,
   },
});

db.produtos.find({}, {
    ingredientes: true,
    nome: true,
    _id: false,
});