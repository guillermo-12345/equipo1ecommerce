const mysql = require('mysql2');
// require('dotenv').config({path: './.env'});


const dbConfig = {
    host: process.env.DB_HOST ,
    port: process.env.DB_PORT ,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_NAME 
   
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

/*
const dbConfig = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'MordoDB',
    database: 'dbtp5'
   
};
*/