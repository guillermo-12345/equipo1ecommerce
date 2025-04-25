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

function createCompra(req, res) {
    const { name, email, phone, cuit, items } = req.body;
  
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "No se recibieron productos en la compra" });
    }
  
    const fecha = new Date().toISOString().split('T')[0]; // yyyy-mm-dd
  
    const values = items.map(item => ([
      item.id,               
      1,                     
      item.quantity,
      item.price,
      fecha
    ]));
  
    const query = `
      INSERT INTO compras (producto_id, proveedor_id, cantidad, precio, fecha_compra)
      VALUES ?
    `;
  
    conexion.query(query, [values], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error al guardar la compra" });
      }
      res.status(201).json({ message: "Compra registrada correctamente", result });
    });
}


module.exports = {
    getCompras,
    createCompra
};
