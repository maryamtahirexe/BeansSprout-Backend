// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; // Make sure User is ESM

// Protect route
export const protect = async (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth?.startsWith('Bearer '))
    return res.status(401).json({ message: 'Not authenticated' });

  try {
    const decoded = jwt.verify(auth.split(' ')[1], process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId).select('-password -refreshToken');
    next();
  } catch {
    res.status(401).json({ message: 'Token invalid or expired' });
  }
};

// Admin only
export const adminOnly = (req, res, next) => {
  if (req.user?.role !== 'admin')
    return res.status(403).json({ message: 'Admin access only' });
  next();
};