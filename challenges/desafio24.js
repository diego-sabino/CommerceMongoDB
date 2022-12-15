db.produtos.updateMany({}, {
  $push: {
    valoresNutricionais: {
      $each: [],
      $sort: {
        percentual: -1,
      },
    },
  },
});

db.produtos.find({}, {
    valoresNutricionais: true,
    nome: true,
    _id: false,
});