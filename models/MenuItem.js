import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  description: { type: String },
  price:       { type: Number, required: true },
  category:    { type: String, enum: ['coffee', 'matcha', 'pastries', 'cold-drinks'], required: true },
  image:       { type: String },
  tags:        [{ type: String }],
  available:   { type: Boolean, default: true },
}, { timestamps: true });

menuItemSchema.index({ category: 1 });

export default mongoose.model('MenuItem', menuItemSchema);