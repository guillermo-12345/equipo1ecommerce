const express = require('express');
const cors = require('cors');
const clientRoutes = require('./routes/clientRoute');
const productRoutes = require('./routes/productosRoutes');
const proveedoresRoutes = require('./routes/proveedoresRoutes');
const ventaRoute = require('./routes/ventaRoute');
const compraRoute = require('./routes/compraRoute');
const authRoutes = require('./routes/authRoute'); // Importa las rutas de autenticación
const  procesarVenta = require('./controllers/procesoVentaController');
const conexion = require('../backEnd/db/conection');
const app = express();
const port = 3000;

// Configuración de CORS
app.use(cors({
    origin: 'http://localhost:3001', // Asegúrate que esta URL es la correcta para tu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}));

// Agregando el encabezado Cross-Origin-Opener-Policy
app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    next();
});

app.use(express.json());
app.use("/", clientRoutes);
app.use("/", productRoutes);
app.use("/", proveedoresRoutes);
app.use("/", ventaRoute);
app.use("/", compraRoute);
app.use("/auth", authRoutes); 
app.post("(/venta", procesarVenta)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
