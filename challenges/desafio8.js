db.produtos.deleteMany({ curtidas: { $lte: 50 } });
db.produtos.find({}, { _id: false, nome: true });