db.produtos.find({
  vendidos: {
    $gte: 50,
    $lte: 100,
  },
}, {
  _id: false,
  nome: true,
  vendidos: true,
}).sort({ vendidos: 1 });