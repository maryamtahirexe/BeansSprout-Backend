// controllers/orderController.js
import Order from '../models/Order.js'; // make sure your Order model is also ESM

// POST /api/orders — place a new order
export const placeOrder = async (req, res) => {
  try {
    const { items, totalAmount } = req.body;
    if (!items || items.length === 0)
      return res.status(400).json({ message: 'No items in order' });

    const order = await Order.create({
      userId: req.user._id,
      items,
      totalAmount,
      paymentStatus: 'unpaid',
      status: 'pending',
    });

    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/orders/my — logged-in user's orders
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/orders/:id — single order (owner or admin)
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('userId', 'name email');
    if (!order) return res.status(404).json({ message: 'Order not found' });

    const isOwner = order.userId._id.toString() === req.user._id.toString();
    const isAdmin = req.user.role === 'admin';
    if (!isOwner && !isAdmin)
      return res.status(403).json({ message: 'Not authorized' });

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};