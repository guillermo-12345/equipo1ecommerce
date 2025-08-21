// const express = require('express');
// const router = express.Router();

// const clientController = require('../controllers/clienteController');

// router.post('/cliente', clientController.createCliente);
// router.get('/clientes', clientController.getClientes); 
// router.delete('/clientes/:id', clientController.deleteCliente);
// router.put('/clientes/:id', clientController.updateCliente); 



// module.exports = router;
const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clienteController');

// Rutas clientes
router.post('/', clientController.createCliente); // Registro manual
router.post('/firebase', clientController.createClienteFirebase); // Registro via Firebase
router.get('/', clientController.getClientes); 
router.delete('/:id', clientController.deleteCliente);
router.put('/:id', clientController.updateCliente); 

module.exports = router;
