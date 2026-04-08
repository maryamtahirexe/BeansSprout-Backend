// controllers/adminController.js
import Order from '../models/Order.js';
import User from '../models/User.js';
import MenuItem from '../models/MenuItem.js';

// GET /api/admin/orders — all orders with pagination
export const getAllOrders = async (req, res) => {
  try {
    const page  = parseInt(req.query.page)  || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip  = (page - 1) * limit;

    const [orders, total] = await Promise.all([
      Order.find()
        .populate('userId', 'name email')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      Order.countDocuments(),
    ]);

    res.json({ orders, total, page, pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PATCH /api/admin/orders/:id/status — update order status
export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ['pending', 'confirmed', 'preparing', 'ready', 'completed'];
    if (!validStatuses.includes(status))
      return res.status(400).json({ message: 'Invalid status' });

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    ).populate('userId', 'name email');

    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/admin/dashboard — stats
export const getDashboard = async (req, res) => {
  try {
    const [totalOrders, totalUsers, totalMenuItems, recentOrders, revenue] = await Promise.all([
      Order.countDocuments(),
      User.countDocuments({ role: 'user' }),
      MenuItem.countDocuments({ available: true }),
      Order.find().sort({ createdAt: -1 }).limit(5).populate('userId', 'name email'),
      Order.aggregate([
        { $match: { paymentStatus: 'paid' } },
        { $group: { _id: null, total: { $sum: '$totalAmount' } } },
      ]),
    ]);

    res.json({
      totalOrders,
      totalUsers,
      totalMenuItems,
      recentOrders,
      totalRevenue: revenue[0]?.total || 0,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/admin/users — all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select('-password -refreshToken')
      .sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};