// const conexion = require("../db/conection");

// function getVentas(req, res) {
//     const query = `
//        SELECT 
//     ventas.venta_id AS id_venta, 
//     ventas.fecha_venta, 
//     ventas.total, 
//     ventas.cliente_id,  
//     venta_detalle.producto_id, 
//     producto.nombre AS nombre_producto 
// FROM ventas
// LEFT JOIN venta_detalle ON ventas.venta_id = venta_detalle.venta_id
// LEFT JOIN producto ON venta_detalle.producto_id = producto.producto_id;

//     `;

//     conexion.query(query, (err, results) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ error: 'Error al obtener los clientes' });
//         } else {
//             return res.status(200).json(results);
//         }
//     });
// }

// function createVentas(req, res) {
//     const { cliente_id, productos } = req.body; 
//     // productos = [{ producto_id, cantidad, precio }]

//     if (!productos || productos.length === 0) {
//         return res.status(400).json({ error: "No hay productos en la venta" });
//     }

//     const total = productos.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

//     // 1. Insertar la venta
//     const queryVenta = `INSERT INTO ventas (fecha_venta, total, cliente_id) VALUES (NOW(), ?, ?)`;
//     conexion.query(queryVenta, [total, cliente_id], (err, result) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ error: "Error al crear la venta" });
//         }

//         const venta_id = result.insertId;

//         // 2. Insertar los detalles de la venta
//         const queryDetalle = `INSERT INTO venta_detalle (venta_id, producto_id, cantidad, precio) VALUES ?`;
//         const values = productos.map(item => [venta_id, item.producto_id, item.cantidad, item.precio]);

//         conexion.query(queryDetalle, [values], (err2) => {
//             if (err2) {
//                 console.error(err2);
//                 return res.status(500).json({ error: "Error al crear los detalles de la venta" });
//             }

//             return res.status(201).json({ message: "Venta registrada", venta_id });
//         });
//     });
// }
// module.exports = {

//     getVentas,
//     createVentas
// };


///////////////////////////////////////////////////


// function createVentas(req,res){
//     const{venta, cliente,fecha,total} = req.body
//     const query = ` Insert into Ventas(venta_id,cliente_id,fecha_venta,total) values (?,?,?,?)`
//      console.log('Datos recibidos:', { venta, cliente, fecha, total });

//     conexion.query(query, [venta,cliente,fecha,total],(err,result)=>{

//          if (err) {
//             console.error(err);
//             return res.status(500).send("Error al crear la venta");
//         }else{
//             const nuevaVenta = { id: result.insertId, cliente,fecha, total};
//         return res.status(201).json(nuevaVenta); 
//         }
//     })
//  }



// function createVentas(req, res) {
//     const { venta, cliente, fecha, total } = req.body;
//     const query = 'INSERT INTO Ventas(venta_id, cliente_id, fecha_venta, total) VALUES (?, ?, ?, ?)';
    
//     conexion.query(query, [venta, cliente, fecha, total], (err, result) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send("Error al crear la venta");
//         } else {
//             const nuevaVenta = { 
//                 id: result.insertId, 
//                 venta_id: venta,
//                 cliente_id: cliente, 
//                 fecha_venta: fecha, 
//                 total: total 
//             };
//             return res.status(201).json(nuevaVenta); 
//         }
//     });
// }const conexion = require("../db/conection");

// function getVentas(req, res) {
//     const query = `
//        SELECT 
//             ventas.venta_id AS id_venta, 
//             ventas.fecha_venta, 
//             ventas.total, 
//             ventas.cliente_id,  
//             venta_detalle.producto_id, 
//             venta_detalle.precio_venta,
//             venta_detalle.cantidad,
//             producto.nombre AS nombre_producto 
//         FROM ventas
//         LEFT JOIN venta_detalle ON ventas.venta_id = venta_detalle.venta_id
//         LEFT JOIN producto ON venta_detalle.producto_id = producto.producto_id;
//     `;

//     conexion.query(query, (err, results) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ error: 'Error al obtener las ventas' });
//         } else {
//             return res.status(200).json(results);
//         }
//     });
// }

// function createVentas(req, res) {
//     let { cliente_id, productos } = req.body;

//     // Cliente por defecto si no viene
//     if (!cliente_id) cliente_id = 1;

//     if (!productos || productos.length === 0) {
//         return res.status(400).json({ error: "No hay productos en la venta" });
//     }

//     // Calcular total sumando precio_venta * cantidad
//     const total = productos.reduce((acc, item) => acc + (item.precio || 0) * item.cantidad, 0);

//     // Insertar la venta
//     const queryVenta = `INSERT INTO ventas (fecha_venta, total, cliente_id) VALUES (NOW(), ?, ?)`;
//     conexion.query(queryVenta, [total, cliente_id], (err, result) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ error: "Error al crear la venta" });
//         }

//         const venta_id = result.insertId;

//         // Insertar los detalles de la venta incluyendo precio_venta
//         const queryDetalle = `INSERT INTO venta_detalle (venta_id, producto_id, cantidad, precio_venta) VALUES ?`;
//         const values = productos.map(item => [
//             venta_id,
//             item.producto_id,
//             item.cantidad,
//             item.precio || 0 // precio por defecto 0 si no viene
//         ]);

//         conexion.query(queryDetalle, [values], (err2) => {
//             if (err2) {
//                 console.error(err2);
//                 return res.status(500).json({ error: "Error al crear los detalles de la venta" });
//             }

//             return res.status(201).json({ message: "Venta registrada", venta_id });
//         });
//     });
// }

// module.exports = {
//     getVentas,
//     createVentas
// // };







// const conexion = require("../db/conection");

// function getVentas(req, res) {
//     const query = `
//         SELECT ventas.venta_id AS id_venta,
//                ventas.fecha_venta,
//                ventas.total,
//                ventas.cliente_id,
//                venta_detalle.producto_id,
//                venta_detalle.cantidad,
//                producto.nombre AS nombre_producto
//         FROM ventas
//         LEFT JOIN venta_detalle ON ventas.venta_id = venta_detalle.venta_id
//         LEFT JOIN producto ON venta_detalle.producto_id = producto.producto_id;
//     `;
//     conexion.query(query, (err, results) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ error: 'Error al obtener los clientes' });
//         } else {
//             return res.status(200).json(results);
//         }
//     });
// }

// function createVentas(req, res) {
//     let { cliente_id, productos } = req.body;

//     // Cliente por defecto si no viene
//     if (!cliente_id) cliente_id = 1;

//     if (!productos || productos.length === 0) {
//         return res.status(400).json({ error: "No hay productos en la venta" });
//     }

//     // Calcular total correctamente usando precio
//     const total = productos.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

//     // 1. Insertar la venta
//     const queryVenta = `
//         INSERT INTO ventas (fecha_venta, total, cliente_id)
//         VALUES (NOW(), ?, ?)
//     `;
//     conexion.query(queryVenta, [total, cliente_id], (err, result) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ error: "Error al crear la venta" });
//         }

//         const venta_id = result.insertId;

//         // 2. Insertar detalles de la venta incluyendo precio
//         const queryDetalle = `
//             INSERT INTO venta_detalle (venta_id, producto_id, cantidad, precio_venta)
//             VALUES ?
//         `;
//         const values = productos.map(item => [venta_id, item.producto_id, item.cantidad, item.precio]);

//         conexion.query(queryDetalle, [values], (err2) => {
//             if (err2) {
//                 console.error(err2);
//                 return res.status(500).json({ error: "Error al crear los detalles de la venta" });
//             }

//             return res.status(201).json({ message: "Venta registrada", venta_id });
//         });
//     });
// }

// module.exports = { getVentas, createVentas };


const conexion = require("../db/conection");

function getVentas(req, res) {
    const query = `
        SELECT ventas.venta_id AS id_venta,
               ventas.fecha_venta,
               ventas.total,
               ventas.cliente_id,
               venta_detalle.producto_id,
               venta_detalle.cantidad,
               producto.nombre AS nombre_producto
        FROM ventas
        LEFT JOIN venta_detalle ON ventas.venta_id = venta_detalle.venta_id
        LEFT JOIN producto ON venta_detalle.producto_id = producto.producto_id;
    `;
    conexion.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al obtener los clientes' });
        } else {
            return res.status(200).json(results);
        }
    });
}

function createVentas(req, res) {
    let { cliente_id, productos } = req.body;

    // Cliente por defecto si no viene
    if (!cliente_id) cliente_id = 1;

    if (!productos || productos.length === 0) {
        return res.status(400).json({ error: "No hay productos en la venta" });
    }

    // Calcular total correctamente usando precio
    const total = productos.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    // 1. Insertar la venta
    const queryVenta = `
        INSERT INTO ventas (fecha_venta, total, cliente_id)
        VALUES (NOW(), ?, ?)
    `;
    conexion.query(queryVenta, [total, cliente_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Error al crear la venta" });
        }

        const venta_id = result.insertId;

        // 2. Insertar detalles de la venta incluyendo precio
        const queryDetalle = `
            INSERT INTO venta_detalle (venta_id, producto_id, cantidad, precio_venta)
            VALUES ?
        `;
        const values = productos.map(item => [venta_id, item.producto_id, item.cantidad, item.precio]);

        conexion.query(queryDetalle, [values], (err2) => {
            if (err2) {
                console.error(err2);
                return res.status(500).json({ error: "Error al crear los detalles de la venta" });
            }

            // 3. Actualizar stock de cada producto
            productos.forEach(item => {
                const updateStockQuery = `
                    UPDATE producto 
                    SET stock = stock - ? 
                    WHERE producto_id = ?
                `;
                conexion.query(updateStockQuery, [item.cantidad, item.producto_id], (err3) => {
                    if (err3) {
                        console.error(`Error al actualizar stock del producto ${item.producto_id}:`, err3);
                    }
                });
            });

            return res.status(201).json({ message: "Venta registrada y stock actualizado", venta_id });
        });
    });
}

module.exports = { getVentas, createVentas };
