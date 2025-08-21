// const conexion = require("../db/conection");
// // function createCliente(req, res) {
// //     console.log(req.body); 
// //     const { nombre, cuit, correo } = req.body; 
// //     const query = 'INSERT INTO clientes (nombre, cuit, correo) VALUES (?, ?, ?)';

// //     conexion.query(query, [nombre, cuit, correo], (err, result) => {
// //         if (err) {
// //             console.log(err);
// //             return res.status(500).send("Error al crear el cliente"); 
// //         } else {
// //             return res.status(200).json(result);
// //         }
// //     });
// // }
// function createCliente(req, res) {
//     const { nombre, cuit, correo } = req.body; 
//     const query = 'INSERT INTO cliente (nombre, cuit, correo) VALUES (?, ?, ?)';

//     conexion.query(query, [nombre, cuit, correo], (err, result) => {
//         if (err) {
//             console.log(err);
//             return res.status(500).send("Error al crear el cliente", err); 
//         } else {
            
//             const nuevoCliente = { id: result.insertId, nombre, cuit, correo };
//             return res.status(201).json(nuevoCliente); 
//         }
//     });
// }

// function getClientes(req, res) { 
//     const query = 'SELECT * FROM cliente'; 

//     conexion.query(query, (err, results) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ error: 'Error al obtener los clientes' });
//         } else {
//             return res.status(200).json(results);
//         }
//     });
// }

// function deleteCliente(req, res) {
//     const { id } = req.params; 
//     const query = 'DELETE FROM  cliente WHERE cliente_id = ?';


//     conexion.query(query, [id], (err, result) => {
//         if (err) {
//             console.error(err); 
//             return res.status(500).json({ error: 'Error al eliminar el cliente' }); 
//         }

//         if (result.affectedRows === 0) {
//             return res.status(404).json({ error: 'Cliente no encontrado' }); 
//         }

//         return res.status(200).json({ message: 'Cliente eliminado con éxito' }); 
//     });
// }

// function updateCliente(req, res) {
//     const { id } = req.params; 
//     const { nombre, cuit, correo } = req.body; 
//     const query = 'UPDATE cliente SET nombre = ?, cuit = ?, correo = ? WHERE cliente_id = ?';

   
//     conexion.query(query, [nombre, cuit, correo, id], (err, result) => {
//         if (err) {
//             console.error(err); 
//             return res.status(500).json({ error: 'Error al actualizar el cliente' }); 
//         }

//         if (result.affectedRows === 0) {
//             return res.status(404).json({ error: 'Cliente no encontrado' }); 
//         }

//         return res.status(200).json({ message: 'Cliente actualizado con éxito' }); 
//     });
// }


// module.exports = {
//     createCliente,
//     getClientes,
//     deleteCliente,
//     updateCliente 
// };
const conexion = require('../db/conection');


function createCliente(req, res) {
    const { nombre, cuit, correo } = req.body;

    const query = 'INSERT INTO cliente (nombre, cuit, correo) VALUES (?, ?, ?)';

    conexion.query(query, [nombre, cuit, correo], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Error al crear el cliente" });
        }
        const nuevoCliente = { id: result.insertId, nombre, cuit, correo };
        return res.status(201).json(nuevoCliente);
    });
}


function createClienteFirebase(req, res) {
    const { uid, nombre, correo } = req.body;

    if (!uid || !correo) {
        return res.status(400).json({ error: "UID y correo son obligatorios" });
    }

    const cuitDefault = "00000000000";

    const query = `
        INSERT INTO cliente (firebase_uid, nombre, cuit, correo)
        VALUES (?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE 
            nombre = VALUES(nombre),
            correo = VALUES(correo)
    `;

    conexion.query(query, [uid, nombre || "Usuario sin nombre", cuitDefault, correo], (err, result) => {
        if (err) {
            console.error("Error al crear cliente Firebase:", err);
            return res.status(500).json({ error: "Error al crear cliente Firebase" });
        }
        return res.status(201).json({ message: "Cliente registrado con Firebase", id: result.insertId });
    });
}


function getClientes(req, res) { 
    const query = 'SELECT * FROM cliente'; 
    conexion.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al obtener los clientes' });
        } 
        return res.status(200).json(results);
    });
}

// Eliminar cliente
function deleteCliente(req, res) {
    const { id } = req.params; 
    const query = 'DELETE FROM cliente WHERE cliente_id = ?';
    conexion.query(query, [id], (err, result) => {
        if (err) {
            console.error(err); 
            return res.status(500).json({ error: 'Error al eliminar el cliente' }); 
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' }); 
        }
        return res.status(200).json({ message: 'Cliente eliminado con éxito' }); 
    });
}

// Actualizar cliente
function updateCliente(req, res) {
    const { id } = req.params; 
    const { nombre, cuit, correo } = req.body; 
    const query = 'UPDATE cliente SET nombre = ?, cuit = ?, correo = ? WHERE cliente_id = ?';
    conexion.query(query, [nombre, cuit, correo, id], (err, result) => {
        if (err) {
            console.error(err); 
            return res.status(500).json({ error: 'Error al actualizar el cliente' }); 
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' }); 
        }
        return res.status(200).json({ message: 'Cliente actualizado con éxito' }); 
    });
}

module.exports = {
    createCliente,
    createClienteFirebase,
    getClientes,
    deleteCliente,
    updateCliente 
};
