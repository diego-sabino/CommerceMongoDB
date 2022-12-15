db.produtos.updateOne({
  nome: "Big Mac",
  }, {
    $currentDate: {
      ultimaModificao: {
        $type: "date",
      },
    },
});

db.produtos.find({
  ultimaModificao: {
    $exists: true,
  },
 }, {
    nome: true,
    _id: false,
});