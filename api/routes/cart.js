const express = require('express');
const router = express.Router();

const { createOrder, addProduct, removeProduct, editCart } = require('../controllers/cartControllers');

// create a new order
router.post('/:userId', createOrder);
// adding a product in the specific order
router.post('/:orderId/addProduct', addProduct);
// remove a product of a 'open' order
router.delete('/:orderId/removeProduct', removeProduct);
// change de quantity of a products in the cart
router.patch('/:orderId/editCart', editCart);

module.exports = router;