import express from 'express';
import { placeOrder, getMyOrders, getOrderById } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect); // all order routes require login

router.post('/', placeOrder);
router.get('/my', getMyOrders);
router.get('/:id', getOrderById);

export default router;