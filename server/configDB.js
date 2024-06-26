// configBD.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "sql5.freemysqlhosting.net",
    user: "sql5716362",
    password: "lDUVVGUxnB",
    database: "sql5716362",
    port: 3306,
});

connection.connect((error) => {
    if (error) {
        console.error("Conexión fallida:", error);
    } else {
        console.log("Conexión exitosa a MySQL");
    }
});

module.exports = connection;
