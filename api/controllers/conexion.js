const mysql = require("mysql2");

const conectar = () => {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "inmoitt",
  });
};

module.exports = conectar;
