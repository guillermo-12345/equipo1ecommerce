const express = require('express');
const cors = require('cors'); 
const clientRoutes = require('./routes/clientRoute'); 
const productRoutes = require('./routes/productosRoutes'); 
const proveedoresRoutes = require('./routes/proveedoresRoutes')
const ventaRoute = require ('./routes/ventaRoute')

const conexion = require('../backEnd/db/conection'); 
const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://localhost:3001', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
    credentials: true 
}));

app.use(express.json());
app.use("/", clientRoutes); 
app.use("/", productRoutes); 
app.use("/", proveedoresRoutes);
app.use("/", ventaRoute)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
