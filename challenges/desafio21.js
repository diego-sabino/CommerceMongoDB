db.produtos.updateMany({
  nome: "Cheddar McMelt",
}, {
  $pop: {
    ingredientes: 1,
   },
});

db.produtos.find({}, {
    ingredientes: true,
    nome: true,
    _id: false,
});