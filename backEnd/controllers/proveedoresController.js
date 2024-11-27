const conexion = require("../db/conection");

function getProveedor(req, res) {
    const query = "SELECT * FROM proveedores";

    conexion.query(query, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error al buscar el proveedor");
        }
        res.json(result);
    });
}

function createProveedor(req, res) {
    const { nombre, telefono, correo, categoria } = req.body;
    const query = 'INSERT INTO proveedores (nombre, telefono, correo, categoria) VALUES (?, ?, ?, ?)';

    conexion.query(query, [nombre, telefono, correo, categoria], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error al crear el proveedor");
        }else{
            
        
        const nuevoProveedor = { id: result.insertId, nombre, telefono, correo, categoria };
        return res.status(201).json(nuevoProveedor); 
        }
    });
}

function updateProveedor(req, res) {
    const proveedoresId = req.params.id;
    const { nombre, telefono, correo, categoria } = req.body;
    const query = "UPDATE proveedores SET nombre = ?, telefono = ?, correo = ?, categoria = ? WHERE id = ?";
    

    conexion.query(query, [nombre, telefono, correo, categoria, proveedoresId], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error al actualizar el proveedor");
        }
        if (result.affectedRows === 0) {
            return res.status(404).send("Proveedor no encontrado");
        }
        res.json({ message: "Proveedor actualizado correctamente" });
    });
}

function getProveedorId(req, res) {
    const proveedoresId = req.params.id;
    const query = "SELECT * FROM proveedores WHERE id = ?";

    conexion.query(query, [proveedoresId], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error al buscar el proveedor");
        }
        if (result.length === 0) {
            return res.status(404).send("Proveedor no encontrado");
        }
        res.json(result[0]); 
    });
}

function deleteProveedor(req, res) {
    const proveedoresId = req.params.id;
    const query = "DELETE FROM proveedores WHERE id = ?";

    conexion.query(query, [proveedoresId], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error al borrar el proveedor");
        }
        if (result.affectedRows === 0) {
            return res.status(404).send("Proveedor no encontrado");
        }
        res.json({ message: "Proveedor eliminado correctamente" });
    });
}

module.exports = {
    getProveedor,
    createProveedor,
    updateProveedor,
    getProveedorId,
    deleteProveedor,
};
