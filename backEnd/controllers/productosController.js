// const conexion = require("../db/conection");

// function getProducto(req, res) {
//     const query = "SELECT * FROM productos"

//     conexion.query(query, (err, result) => {
//         if (err) {
//             console.error(err)
//             res.status(500).send("Error al buscar el producto")
//         } else {
//             res.json(result)
//         }
//     })
// }

// function createProducto(req, res) {
//     console.log(req.body)
//     const { imagen, categoria, descripcion, precio_compra, precio_venta, nombre, stock } = req.body
//     const query = 'INSERT INTO productos (imagen, categoria, descripcion, precio_compra, precio_venta, nombre, stock) VALUES (?, ?, ?, ?, ?, ?, ?)'

//     conexion.query(query, [imagen, categoria, descripcion, precio_compra, precio_venta, nombre, stock], (err, result) => {
//         if (err) {
//             console.log(err)
//             return res.status(500).send("Error al crear el producto")
//         } else {
//             return res.status(200).json(result)
//         }
//     })

// }

// function updateProducto(req, res) {
//     const productosId = req.params.id;  // Asegúrate de que este ID sea el que esperas
//     const { imagen, categoria, descripcion, precio_compra, precio_venta, nombre, stock } = req.body;
    
//     // Verifica si el ID es válido y si existe en la base de datos (opcional)
//     if (!productosId) {
//         return res.status(400).send("ID del producto no proporcionado");
//     }

//     const query = `
//         UPDATE productos 
//         SET imagen = ?, categoria = ?, descripcion = ?, precio_compra = ?, precio_venta = ?, nombre = ?, stock = ? 
//         WHERE id = ?
//     `;

//     conexion.query(query, [imagen, categoria, descripcion, precio_compra, precio_venta, nombre, stock, productosId], (err, result) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send("Error al actualizar el producto");
//         } else if (result.affectedRows === 0) {
//             res.status(404).send("Producto no encontrado");
//         } else {
//             res.status(200).json({ message: "Producto actualizado con éxito", result });
//         }
//     });
// }


// function getProductoId(req, res) {
//     const productosId = req.params.id
//     const query = "SELECT * FROM productos where id = ?"

//     conexion.query(query, [productosId], (err, result) => {
//         if (err) {
//             console.error(err)
//             res.status(500).send("Error al buscar el producto")
//         } else {
//             res.json(result)
//         }
//     })
// }

// function deleteProducto(req, res) {
//     const productosId = req.params.id
//     const query = "DELETE FROM productos where id = ?"

//     conexion.query(query, [productosId], (err, result) => {
//         if (err) {
//             console.error(err)
//             res.status(500).send("Error al borrar el producto")
//         } else {
//             res.json(result)
//         }
//     })
// }

// module.exports = {
//     getProducto,
//     createProducto,
//     updateProducto,
//     getProductoId,
//     deleteProducto
// };

const conexion = require("../db/conection");

// function createProducto(req, res) {
//     console.log(req.body); 
//     const { nombre, precio_venta, descripcion, imagen } = req.body; // Ahora incluimos la imagen

//     const query = 'INSERT INTO productos (nombre, precio_venta, descripcion, imagen) VALUES (?, ?, ?, ?)';

//     conexion.query(query, [nombre, precio_venta, descripcion, imagen], (err, result) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send("Error al crear el producto"); 
//         } else {
//             return res.status(201).json(result); // 201 indica que se ha creado un nuevo recurso
//         }
//     });
// }

// function createProducto(req, res) { 
//     console.log(req.body); 
//     const { nombre, precio_venta, descripcion, imagen, categoria } = req.body; // Incluimos la categoría

//     const query = 'INSERT INTO productos (nombre, precio_venta, descripcion, imagen, categoria) VALUES (?, ?, ?, ?, ?)';

//     conexion.query(query, [nombre, precio_venta, descripcion, imagen, categoria], (err, result) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send("Error al crear el producto"); 
//         } else {
//             // Obtener el ID del producto recién creado y devolverlo en la respuesta
//             const nuevoProducto = { id: result.insertId, nombre, precio_venta, descripcion, imagen, categoria };
//             return res.status(201).json(nuevoProducto); // Devolver el producto creado con su categoría
//         }
//     });
// }
// function createProducto(req, res) { 
//     console.log(req.body); 
//     const { nombre, precio_venta, precio_compra, descripcion, imagen, categoria } = req.body; // Incluimos precio_compra

//     const query = 'INSERT INTO productos (nombre, precio_venta, precio_compra, descripcion, imagen, categoria) VALUES (?, ?, ?, ?, ?, ?)';

//     conexion.query(query, [nombre, precio_venta, precio_compra, descripcion, imagen, categoria], (err, result) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send("Error al crear el producto"); 
//         } else {
//             return res.status(201).json(result); // 201 indica que se ha creado un nuevo recurso
//         }
//     });
// }

function createProducto(req, res) { 
    console.log(req.body); 
    const { nombre, precio_venta, precio_compra, descripcion, imagen, categoria, stock } = req.body; // Añadido el campo de stock

    const query = 'INSERT INTO productos (nombre, precio_venta, precio_compra, descripcion, imagen, categoria, stock) VALUES (?, ?, ?, ?, ?, ?, ?)';

    conexion.query(query, [nombre, precio_venta, precio_compra, descripcion, imagen, categoria, stock], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error al crear el producto"); 
        } else {
            return res.status(201).json(result); // 201 indica que se ha creado un nuevo recurso
        }
    });
}

function getProducto(req, res) { 
    const query = 'SELECT * FROM productos'; 

    conexion.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al obtener los productos' });
        } else {
            return res.status(200).json(results);
        }
    });
}

function getProductoId(req, res) {
    const { id } = req.params; 
    const query = 'SELECT * FROM productos WHERE id = ?';

    conexion.query(query, [id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al obtener el producto' });
        }
        
        if (results.length === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        return res.status(200).json(results[0]);
    });
}

function deleteProducto(req, res) {
    const { id } = req.params; 
    const query = 'DELETE FROM productos WHERE id = ?';

    conexion.query(query, [id], (err, result) => {
        if (err) {
            console.error(err); 
            return res.status(500).json({ error: 'Error al eliminar el producto' }); 
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' }); 
        }

        return res.status(200).json({ message: 'Producto eliminado con éxito' }); 
    });
}function updateProducto(req, res) {
    const { id } = req.params; 
    const { nombre, precio_venta, precio_compra, descripcion, imagen, categoria, stock } = req.body; 

    const query = 'UPDATE productos SET nombre = ?, precio_venta = ?, precio_compra = ?, descripcion = ?, imagen = ?, categoria = ?, stock = ? WHERE id = ?';

    conexion.query(query, [nombre, precio_venta, precio_compra, descripcion, imagen, categoria, stock, id], (err, result) => {
        if (err) {
            console.error(err); 
            return res.status(500).json({ error: 'Error al actualizar el producto' }); 
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' }); 
        }

        return res.status(200).json({ message: 'Producto actualizado con éxito' }); 
    });
}


module.exports = {
    createProducto,
    getProducto,
    getProductoId,
    deleteProducto,
    updateProducto 
};
