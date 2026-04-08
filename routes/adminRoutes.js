// routes/adminRoutes.js
import express from 'express';
import { getAllOrders, updateOrderStatus, getDashboard, getAllUsers } from '../controllers/adminController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// Protect all admin routes
router.use(protect, adminOnly);

router.get('/dashboard', getDashboard);
router.get('/orders', getAllOrders);
router.patch('/orders/:id/status', updateOrderStatus);
router.get('/users', getAllUsers);

export default router;