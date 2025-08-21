const conexion = require("../db/conection");

function getCompras(req, res) {
    const query = `
    SELECT 
            compras.compra_id, 
            compras.cantidad, 
            compras.precio, 
            compras.fecha_compra, 
            producto.nombre AS producto_nombre, 
            categoria.nombre_categoria AS categoria_nombre, 
            proveedor.nombre AS proveedor_nombre
        FROM compras
        JOIN producto ON compras.producto_id = producto.producto_id
        JOIN categoria ON producto.categoria_id = categoria.categoria_id
        JOIN proveedor ON compras.proveedor_id = proveedor.proveedor_id
`;

    conexion.query(query, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error al buscar el proveedor");
        }
        res.json(result);
    });
}

// function createCompra(req, res) {
//     const { name, email, phone, cuit, items } = req.body;
  
//     if (!items || !Array.isArray(items) || items.length === 0) {
//       return res.status(400).json({ error: "No se recibieron productos en la compra" });
//     }
  
//     const fecha = new Date().toISOString().split('T')[0]; // yyyy-mm-dd
  
//     const values = items.map(item => ([
//       item.id,               
//       1,                     
//       item.quantity,
//       item.price,
//       fecha
//     ]));
  
//     const query = `
//       INSERT INTO compras (producto_id, proveedor_id, cantidad, precio, fecha_compra)
//       VALUES ?
//     `;
  
//     conexion.query(query, [values], (err, result) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ error: "Error al guardar la compra" });
//       }
//       res.status(201).json({ message: "Compra registrada correctamente", result });
//     });
    
// }



// function createCompra(req, res) {
//     const { name, email, phone, cuit, items } = req.body;
  
//     if (!items || !Array.isArray(items) || items.length === 0) {
//       return res.status(400).json({ error: "No se recibieron productos en la compra" });
//     }
  
//     const fecha = new Date().toISOString().split('T')[0]; // yyyy-mm-dd
  
//     const values = items.map(item => ([
//       item.id,               
//       1,                     // Asumo que 1 es el proveedor_id por defecto
//       item.quantity,
//       item.price,
//       fecha
//     ]));
  
//     // Iniciamos una transacción para asegurar la integridad de los datos
//     conexion.beginTransaction(err => {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ error: "Error al iniciar la transacción" });
//       }
  
//       // 1. Insertamos las compras
//       const insertQuery = `
//         INSERT INTO compras (producto_id, proveedor_id, cantidad, precio, fecha_compra)
//         VALUES ?
//       `;
  
//       conexion.query(insertQuery, [values], (err, result) => {
//         if (err) {
//           console.error(err);
//           return conexion.rollback(() => {
//             res.status(500).json({ error: "Error al guardar la compra" });
//           });
//         }
  
//         // 2. Actualizamos el stock de cada producto
//         const updatePromises = items.map(item => {
//           return new Promise((resolve, reject) => {
//             const updateQuery = `
//               UPDATE producto
//               SET stock = stock - ?
//               WHERE producto_id = ?
//             `;
            
//             conexion.query(updateQuery, [item.quantity, item.id], (err, result) => {
//               if (err) {
//                 return reject(err);
//               }
//               resolve(result);
//             });
//           });
//         });
  
//         Promise.all(updatePromises)
//           .then(() => {
//             // Si todo sale bien, hacemos commit
//             conexion.commit(err => {
//               if (err) {
//                 console.error(err);
//                 return conexion.rollback(() => {
//                   res.status(500).json({ error: "Error al confirmar la transacción" });
//                 });
//               }
//               res.status(201).json({ message: "Compra registrada y stock actualizado correctamente", result });
//             });
//           })
//           .catch(error => {
//             console.error(error);
//             conexion.rollback(() => {
//               res.status(500).json({ error: "Error al actualizar el stock de los productos" });
//             });
//           });
//       });
//     });
// }


function createCompra(req, res) {
    const { items } = req.body;
    
    if (!items || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ error: "No se recibieron productos en la compra" });
    }

    console.log("items" , items)

    const fecha = new Date().toISOString().split('T')[0];
    const values = items.map(item => [item.producto_id, item.proveedor_id, item.quantity, item.price, fecha]);
    

    
    const query = `
        INSERT INTO compras (producto_id, proveedor_id, cantidad, precio, fecha_compra) 
        VALUES ?
    `;

    conexion.query(query, [values], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Error al registrar la compra" });
        }

        
        items.forEach(item => {
            const updateQuery = `
                UPDATE producto 
                SET stock = stock - ? 
                WHERE producto_id = ?
            `;
            
            conexion.query(updateQuery, [item.quantity, item.id], (err) => {
                if (err) {
                    console.error(`Error al actualizar stock del producto ${item.id}:`, err);
                   
                }
            });
        });

        return res.status(201).json({ 
            message: "Compra registrada correctamente",
            compra_id: result.insertId 
        });
    });
}

module.exports = {
    getCompras,
    createCompra
};
