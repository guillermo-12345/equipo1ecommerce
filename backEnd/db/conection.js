const mysql = require('mysql2');

const dbConfig = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'MordeDB',
    database: 'prueba 2'
   
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
