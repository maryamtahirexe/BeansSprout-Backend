const express = require('express');
const Stripe  = require('stripe');
const Order   = require('../models/Order');
const { protect } = require('../middleware/authMiddleware');
const { sendOrderEmail } = require('../utils/emailService');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

router.post('/create-session', protect, async (req, res) => {
  const { items } = req.body;
  const lineItems = items.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: { name: item.name, images: item.image ? [item.image] : [] },
      unit_amount: Math.round(item.price * 100),
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/order-success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url:  `${process.env.CLIENT_URL}/order-failed`,
    metadata: { userId: req.user._id.toString() },
  });

  res.json({ url: session.url });
});

router.post('/webhook', async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const order   = await Order.findOneAndUpdate(
      { stripeSessionId: session.id },
      { paymentStatus: 'paid', status: 'confirmed' },
      { new: true }
    ).populate('userId', 'name email');
    if (order) await sendOrderEmail(order);
  }

  res.json({ received: true });
});

export default router;