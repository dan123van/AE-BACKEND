
module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define("Admin", {
    id_admin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });

  return Admin
};
