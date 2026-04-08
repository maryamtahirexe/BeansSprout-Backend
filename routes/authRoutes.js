import express from 'express';
import rateLimit from 'express-rate-limit';
import { signup, login, refresh, logout } from '../controllers/authController.js';

const router = express.Router();

const loginLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 5,
  message: { message: 'Too many login attempts. Try again in 5 minutes.' }
});

router.post('/signup', signup);
router.post('/login', loginLimiter, login);
router.get('/refresh', refresh);
router.post('/logout', logout);

export default router;