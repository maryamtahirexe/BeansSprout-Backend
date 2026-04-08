import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId:        { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    menuItemId:  { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
    name:        String,
    price:       Number,
    quantity:    Number,
    image:       String,
  }],
  totalAmount:   { type: Number, required: true },
  status:        { type: String, enum: ['pending','confirmed','preparing','ready','completed'], default: 'pending' },
  paymentStatus: { type: String, enum: ['unpaid','paid','failed'], default: 'unpaid' },
  stripeSessionId: String,
}, { timestamps: true });

orderSchema.index({ userId: 1 });

export default mongoose.model('Order', orderSchema);