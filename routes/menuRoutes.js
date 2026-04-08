import express from 'express';
import { protect, adminOnly } from '../middleware/authMiddleware.js';
import MenuItem from '../models/MenuItem.js';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 600 });

const router = express.Router();

router.get('/', async (req, res) => {
  const cached = cache.get('menu');
  if (cached) return res.json(cached);

  const items = await MenuItem.find({ available: true });
  cache.set('menu', items);

  res.json(items);
});

router.post('/', protect, adminOnly, async (req, res) => {
  const item = await MenuItem.create(req.body);
  cache.del('menu');
  res.status(201).json(item);
});

router.put('/:id', protect, adminOnly, async (req, res) => {
  const item = await MenuItem.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  cache.del('menu');
  res.json(item);
});

router.delete('/:id', protect, adminOnly, async (req, res) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  cache.del('menu');
  res.json({ message: 'Deleted' });
});

export default router;