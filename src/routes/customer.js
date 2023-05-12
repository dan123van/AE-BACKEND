"use strict";

const router = (app) => {
  app.get("/customer/:id", function (req, res) {
    console.log('Retornando información del usuario');
    const data = [{ id: 1, nombre: "Daniel", numerosTelefono: [] }];
    res.send(data);
  });
};

module.exports = router;
