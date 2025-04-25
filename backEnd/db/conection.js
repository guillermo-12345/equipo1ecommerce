const mysql = require('mysql2');
require('dotenv').config({path: './.env'});


const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ||3006,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'MordoDB',
    database: process.DB_NAME || 'dbtp5'
   
};

/*
const dbConfig = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'MordoDB',
    database: 'dbtp5'
   
};
*/
const conexion = mysql.createConnection(dbConfig);

conexion.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log('Conexión exitosa');
    }
});

module.exports = conexion;
