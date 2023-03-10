db.produtos.updateMany({
  valoresNutricionais: {
    $elemMatch: {
      tipo: "sódio",
      percentual: {
        $gte: 40,
      },
    },
  },
}, {
  $push: {
    tags: "muito sódio",
  },
});
db.produtos.find({}, {
    tags: true,
    nome: true,
    _id: false,
});