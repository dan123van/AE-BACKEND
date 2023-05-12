const Sequelize = require("sequelize");

const MYSQL_DATABASE = process.env.MYSQL_DATABASE;
const MYSQL_USERNAME = process.env.MYSQL_USERNAME;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_PORT = process.env.MYSQL_PORT;

const sequelize = new Sequelize(
  {
    username: 'root',
    password: null,
    database: 'mydb',
    host: '127.0.0.1',
    dialect: 'mysql'
   }
);

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.admin = require('../src/models/admin_model.js')(sequelize, Sequelize);

sequelize.authenticate()
.then(() => {
    console.log('La conexión fue establecida correctamente');
})
.catch((err) => {
    console.log('Error para la conexion a la db: ', err);
})

module.exports = db;