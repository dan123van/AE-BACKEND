"use strict";
const adminProcess = require('../process/adminProcess')

const router = (app, db) => {
  app.get("/admin", async function (req, res) {
    try {
      const data = await adminProcess.obtenerAdmins(req, db);
      console.log('data ', data);
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  });

  app.post("/admin", async function (req, res) {
    try {
      const data = adminProcess.crearAdmins(req, db);
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  });

  app.put("/admin/password/:id", async function (req, res) {
    try {
      const data = await adminProcess.modificarAdmins(req, db);
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = router;
