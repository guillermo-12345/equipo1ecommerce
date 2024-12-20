const mysql = require('mysql2');


require('dotenv').config({ path: './.env' });


const dbConfig = {
    host: process.env.DB_HOST || "mysql",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "MordeDB",
    database: process.env.DB_NAME || "dbtp5"
   
};

const conexion = mysql.createConnection(dbConfig);

conexion.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log('Conexión exitosa');
    }
});

module.exports = conexion;
