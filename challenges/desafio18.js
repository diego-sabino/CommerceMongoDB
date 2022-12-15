db.produtos.updateMany({
  nome: {
    $in: ["Big Mac", "Quarteirão com Queijo"],
   },
  }, {
    $addToSet: {
      ingredientes: "bacon",
    },
});

db.produtos.find({}, {
    ingredientes: true,
    nome: true,
    _id: false,
});