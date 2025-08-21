const express = require('express');
const router = express.Router();

const ventasController = require('../controllers/ventaController');


router.get('/ventas', ventasController.getVentas); 
 router.post('/ventas', ventasController.createVentas)




module.exports = router;
