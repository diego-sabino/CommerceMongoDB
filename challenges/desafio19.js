db.produtos.updateMany({}, {
  $pull: {
    ingredientes: "cebola"
   },
});

db.produtos.find({}, {
    ingredientes: true,
    nome: true,
    _id: false,
});