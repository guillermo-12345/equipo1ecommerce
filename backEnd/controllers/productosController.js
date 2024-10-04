const conexion = require("../db/conection");

function getProducto(req, res) {
    const query = "SELECT * FROM productos"

    conexion.query(query, (err, result) => {
        if (err) {
            console.error(err)
            res.status(500).send("Error al buscar el producto")
        } else {
            res.json(result)
        }
    })
}

function createProducto(req, res) {
    console.log(req.body)
    const { imagen, categoria, descripcion, precio_compra, precio_venta, nombre, stock } = req.body
    const query = 'INSERT INTO productos (imagen, categoria, descripcion, precio_compra, precio_venta, nombre, stock) VALUES (?, ?, ?, ?, ?, ?, ?)'

    conexion.query(query, [imagen, categoria, descripcion, precio_compra, precio_venta, nombre, stock], (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).send("Error al crear el producto")
        } else {
            return res.status(200).json(result)
        }
    })

}

function updateProducto(req, res) {
    const productosId = req.params.id
    const { imagen, categoria, descripcion, precio_compra, precio_venta, nombre, stock } = req.body
    const query = "UPDATE productos set imagen = ?, categoria = ?, descripcion = ?, precio_compra = ?, precio_venta = ?, nombre = ?, stock = ? where id = ?"

    conexion.query(query, [imagen, categoria, descripcion, precio_compra, precio_venta, nombre, stock, productosId], (err, result) => {
        if (err) {
            console.error(err)
            res.status(500).send("Error al actualisar el producto")
        } else {
            res.json(result)
        }
    })
}

function getProductoId(req, res) {
    const productosId = req.params.id
    const query = "SELECT * FROM productos where id = ?"

    conexion.query(query, [productosId], (err, result) => {
        if (err) {
            console.error(err)
            res.status(500).send("Error al buscar el producto")
        } else {
            res.json(result)
        }
    })
}

function deleteProducto(req, res) {
    const productosId = req.params.id
    const query = "DELETE FROM productos where id = ?"

    conexion.query(query, [productosId], (err, result) => {
        if (err) {
            console.error(err)
            res.status(500).send("Error al borrar el producto")
        } else {
            res.json(result)
        }
    })
}

module.exports = {
    getProducto,
    createProducto,
    updateProducto,
    getProductoId,
    deleteProducto
};