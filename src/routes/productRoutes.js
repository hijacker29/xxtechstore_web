const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Esta ruta obtiene todos los productos
router.get('/', productController.getAllProducts);

module.exports = router;
