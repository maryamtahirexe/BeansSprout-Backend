import express from 'express';
import { protect, adminOnly } from '../middleware/authMiddleware.js';
import MenuItem from '../models/MenuItem.js';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 600 });
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const cached = cache.get('menu');
    if (cached) return res.json(cached);

    // Use $ne false so items without the field also show up
    const items = await MenuItem.find({ available: { $ne: false } }).lean();
    cache.set('menu', items);
    res.json(items);
  } catch (err) {
    console.error('Menu fetch error:', err.message);
    res.status(500).json({ message: err.message });
  }
});
router.get('/test', async (req, res) => {
  try {
    // Test 1: Is DB connected?
    const dbState = mongoose.connection.readyState;
    // 0=disconnected, 1=connected, 2=connecting, 3=disconnecting

    // Test 2: Can we count documents?
    const count = await MenuItem.countDocuments({});

    // Test 3: Fetch without any filter
    const items = await MenuItem.find({}).limit(3).lean();

    res.json({
      dbState,          // should be 1
      totalCount: count, // should be 40
      sampleItems: items // should show 3 items
    });
  } catch (err) {
    res.status(500).json({ error: err.message, stack: err.stack });
  }
});

router.post('/', protect, adminOnly, async (req, res) => {
  try {
    const item = await MenuItem.create(req.body);
    cache.del('menu');
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', protect, adminOnly, async (req, res) => {
  try {
    const item = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    cache.del('menu');
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', protect, adminOnly, async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    cache.del('menu');
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;