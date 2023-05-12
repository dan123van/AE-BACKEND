"use strict";

const adminProcess = {
  obtenerAdmins: async (req, db) => {
    let response = await db.admin.findAll();
    return response.length > 0 ? response : [];
  },
  crearAdmins: async (req, db) => {
    let { nombre, password } = req.body;
    db.admin.create({ nombre: nombre, password: password });
  },
  modificarAdmins: async (req, db) => {
    let { id } = req.params;
    let { password } = req.body;

    return await db.admin.update(
      { password: password },
      {
        where: {
          id_admin: id,
        },
      }
    );
  },
};

module.exports = adminProcess;
