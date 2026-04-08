const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

exports.sendOrderEmail = async (order) => {
  const itemRows = order.items.map(i =>
    `<tr><td style="padding:8px;border-bottom:1px solid #f9a8d4;">${i.name}</td><td style="padding:8px;border-bottom:1px solid #f9a8d4;">x${i.quantity}</td><td style="padding:8px;border-bottom:1px solid #f9a8d4;">$${(i.price * i.quantity).toFixed(2)}</td></tr>`
  ).join('');

  const html = `
    <div style="font-family:'DM Sans',sans-serif;max-width:600px;margin:auto;background:#fffbf5;border-radius:16px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#d8b4fe,#f9a8d4);padding:32px;text-align:center;">
        <h1 style="color:#fff;margin:0;font-size:28px;">🌸 BeansSprout</h1>
        <p style="color:#fff;margin:8px 0 0;opacity:0.9;">New Order Received!</p>
      </div>
      <div style="padding:32px;">
        <p><b>Order ID:</b> ${order._id}</p>
        <p><b>Customer:</b> ${order.userId?.name} (${order.userId?.email})</p>
        <p><b>Time:</b> ${new Date(order.createdAt).toLocaleString()}</p>
        <table style="width:100%;border-collapse:collapse;margin:16px 0;">
          <thead><tr style="background:#f9a8d4;"><th style="padding:8px;text-align:left;">Item</th><th style="padding:8px;">Qty</th><th style="padding:8px;">Price</th></tr></thead>
          <tbody>${itemRows}</tbody>
        </table>
        <p style="font-size:20px;font-weight:bold;color:#7c3aed;">Total: $${order.totalAmount.toFixed(2)}</p>
      </div>
    </div>`;

  await resend.emails.send({
    from: 'BeansSprout <orders@yourdomain.com>',
    to:   [process.env.OWNER_EMAIL, order.userId?.email].filter(Boolean),
    subject: `🌸 New Order #${order._id} — BeansSprout`,
    html,
  });
};