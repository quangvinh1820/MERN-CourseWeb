const express = require('express');
const router = express.Router();

const orderController = require('../controllers/OrderController');
const verify = require ("../utils/verifyToken.js");

router.post('/', verify.verifyToken, orderController.createOrder);
router.put('/:id', verify.verifyAdmin, orderController.updateOrder);
router.delete('/:id', verify.verifyAdmin, orderController.deleteOrder);

//GET USER ORDERS
router.get('/find/:userId', verify.verifyUser,orderController.getUserOrders);
//GET ALL ORDERS
router.get('/', verify.verifyAdmin, orderController.getOrders);
//GET MONTHLY INCOME
router.get('/income', verify.verifyAdmin, orderController.income);

module.exports = router;