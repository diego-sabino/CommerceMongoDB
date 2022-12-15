db.produtos.find({
  $or: [{
    curtidas: 36,
  }, {
   vendidos: 85,
  }],
}, {
  nome: true,
  vendidos: true,
  curtidas: true,
  _id: false,
});