const conexion = require("../dbConection");

function getProveedor(req, res) {
    const query = "SELECT * FROM proveedores"

    conexion.query(query, (err, result) => {
        if (err) {
            console.error(err)
            res.status(500).send("Error al buscar el proveedor")
        } else {
            res.json(result)
        }
    })
}

function createProveedor(req, res) {
    console.log(req.body)
    const { nombre, telefono, correo, categoria } = req.body
    const query = 'INSERT INTO proveedores (nombre, telefono, correo, categoria) VALUES (?, ?, ?, ?)'

    conexion.query(query, [nombre, telefono, correo, categoria], (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).send("Error al crear el proveedor")
        } else {
            return res.status(200).json(result)
        }
    });

}

function updateProveedor(req, res) {
    const proveedoresId = req.params.id
    const { nombre, telefono, correo, categoria } = req.body
    const query = "UPDATE proveedores set nombre = ?, telefono = ?, correo = ?, categoria = ? where id = ?"

    conexion.query(query, [nombre, telefono, correo, categoria, proveedoresId], (err, result) => {
        if (err) {
            console.error(err)
            res.status(500).send("Error al actualisar el proveedor")
        } else {
            res.json(result)
        }
    })
}

function getProveedorId(req, res) {
    const proveedoresId = req.params.id
    const query = "SELECT * FROM proveedores where id = ?"

    conexion.query(query, [proveedoresId], (err, result) => {
        if (err) {
            console.error(err)
            res.status(500).send("Error al buscar el proveedor")
        } else {
            res.json(result)
        }
    })
}

function deleteProveedor(req, res) {
    const proveedoresId = req.params.id
    const query = "DELETE FROM proveedores where id = ?"

    conexion.query(query, [proveedoresId], (err, result) => {
        if (err) {
            console.error(err)
            res.status(500).send("Error al borrar el proveedor")
        } else {
            res.json(result)
        }
    })
}

module.exports = {
    getProveedor,
    createProveedor,
    updateProveedor,
    getProveedorId,
    deleteProveedor
};