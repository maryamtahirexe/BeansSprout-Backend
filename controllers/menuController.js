// controllers/menuController.js
import MenuItem from '../models/MenuItem.js';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 600 });

// GET /api/menu — get all available menu items
export const getMenu = async (req, res) => {
  try {
    const cached = cache.get('menu');
    if (cached) return res.json(cached);

    const items = await MenuItem.find({ available: true });
    cache.set('menu', items);
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/menu — create new menu item
export const createMenuItem = async (req, res) => {
  try {
    const item = await MenuItem.create(req.body);
    cache.del('menu');
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PATCH /api/menu/:id — update menu item
export const updateMenuItem = async (req, res) => {
  try {
    const item = await MenuItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!item) return res.status(404).json({ message: 'Item not found' });
    cache.del('menu');
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE /api/menu/:id — delete menu item
export const deleteMenuItem = async (req, res) => {
  try {
    const item = await MenuItem.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    cache.del('menu');
    res.json({ message: 'Menu item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};