db.produtos.updateMany({}, {
  $push: {
    tags: {
      $each: ["combo", "tasty"],
      $sort: 1,
    },
  },
});

db.produtos.find({}, {
    tags: true,
    nome: true,
    _id: false,
});