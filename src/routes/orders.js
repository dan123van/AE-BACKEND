"use strict";

const router = (app) => {
  app.get("/orders/:id", function (req, res) {
    console.log('Retornando información de las orders');
    const data = [{ id: 1, nombre: "Daniel", numerosTelefono: [] }];
    res.send(data);
  });
};

module.exports = router;
