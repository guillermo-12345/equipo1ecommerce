const express = require('express');
const router = express.Router();

const compraController = require('../controllers/compraController');


router.get('/compras', compraController.getCompras); 
router.post('/compras', compraController.createCompra);



module.exports = router;
