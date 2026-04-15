// authController.js
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; // Make sure your User model is also ESM compatible

// Helper function to sign JWT
const signToken = (payload, secret, expiresIn) =>
  jwt.sign(payload, secret, { expiresIn });

// SIGNUP
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Email already in use' });

    const user = await User.create({ name, email, password });

    const token = signToken(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      '15m'
    );

    const refreshToken = signToken(
      { userId: user._id },
      process.env.JWT_REFRESH_SECRET,
      '7d'
    );

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(201).json({
      token,
      user: { _id: user._id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    console.error('SIGNUP ERROR:', err); // ← add this
    res.status(500).json({ message: err.message });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password, rememberMe } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password)))
      return res.status(401).json({ message: 'Invalid email or password' });

    const token = signToken(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      '15m'
    );

    const refreshToken = signToken(
      { userId: user._id },
      process.env.JWT_REFRESH_SECRET,
      rememberMe ? '30d' : '7d'
    );

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    const maxAge = rememberMe ? 30 * 24 * 60 * 60 * 1000 : 7 * 24 * 60 * 60 * 1000;

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge
    });

    res.json({
      token,
      user: { _id: user._id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// REFRESH TOKEN
export const refresh = async (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.status(401).json({ message: 'No refresh token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user || user.refreshToken !== token)
      return res.status(403).json({ message: 'Invalid token' });

    const newToken = signToken(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      '15m'
    );

    res.json({ token: newToken });
  } catch {
    res.status(403).json({ message: 'Token expired or invalid' });
  }
};

// LOGOUT
export const logout = async (req, res) => {
  const token = req.cookies.refreshToken;

  if (token) {
    const user = await User.findOne({ refreshToken: token });
    if (user) {
      user.refreshToken = null;
      await user.save({ validateBeforeSave: false });
    }
  }

  res.clearCookie('refreshToken');
  res.json({ message: 'Logged out' });
};