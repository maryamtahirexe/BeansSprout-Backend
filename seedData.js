// // ============================================================
// //  server/seedData.js
// //  Copy this file into your SERVER folder (same level as server.js)
// //
// //  HOW TO RUN:
// //    1. cd into your server folder
// //    2. Make sure your .env file has MONGO_URI set
// //    3. Run:  node seedData.js
// // ============================================================

// import dotenv from 'dotenv';
// import mongoose from 'mongoose';

// dotenv.config();

// // ── Inline schema (no import needed, avoids path issues) ──
// const menuItemSchema = new mongoose.Schema({
//   name:        { type: String, required: true },
//   description: { type: String },
//   price:       { type: Number, required: true },
//   category:    { type: String, enum: ['coffee', 'matcha', 'pastries', 'cold-drinks'], required: true },
//   image:       { type: String },
//   tags:        [{ type: String }],
//   available:   { type: Boolean, default: true },
// }, { timestamps: true });

// const MenuItem = mongoose.models.MenuItem || mongoose.model('MenuItem', menuItemSchema);

// // ── 40 items with working Unsplash images ──
// const menuItems = [
//   // ───── COFFEE (10) ─────
//   {
//     name: 'Classic Espresso',
//     description: 'Rich, bold shot of our signature single-origin espresso blend.',
//     price: 3.50,
//     category: 'coffee',
//     image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&auto=format&fit=crop&q=80',
//     tags: ['popular'],
//   },
//   {
//     name: 'Lavender Latte',
//     description: 'Velvety espresso with house-made lavender syrup and oat milk foam.',
//     price: 6.50,
//     category: 'coffee',
//     image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=80',
//     tags: ['popular', 'vegan'],
//   },
//   {
//     name: 'Rose Cappuccino',
//     description: 'Double espresso topped with rosewater-infused micro-foam.',
//     price: 6.00,
//     category: 'coffee',
//     image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=80',
//     tags: [],
//   },
//   {
//     name: 'Vanilla Bean Latte',
//     description: 'Creamy whole milk latte infused with real vanilla bean paste.',
//     price: 6.25,
//     category: 'coffee',
//     image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=500&auto=format&fit=crop&q=80',
//     tags: ['popular'],
//   },
//   {
//     name: 'Cold Brew',
//     description: 'Slow-steeped 18 hours. Smooth, naturally sweet, zero bitterness.',
//     price: 5.50,
//     category: 'coffee',
//     image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=80',
//     tags: ['vegan'],
//   },
//   {
//     name: 'Caramel Macchiato',
//     description: 'Layered espresso, vanilla syrup, steamed milk and caramel drizzle.',
//     price: 6.50,
//     category: 'coffee',
//     image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&auto=format&fit=crop&q=80',
//     tags: [],
//   },
//   {
//     name: 'Mocha Latte',
//     description: 'House espresso with rich dark chocolate sauce and steamed milk.',
//     price: 6.75,
//     category: 'coffee',
//     image: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=500&auto=format&fit=crop&q=80',
//     tags: [],
//   },
//   {
//     name: 'Honey Flat White',
//     description: 'Silky micro-foam espresso drink with a drizzle of wildflower honey.',
//     price: 5.75,
//     category: 'coffee',
//     image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&auto=format&fit=crop&q=80',
//     tags: [],
//   },
//   {
//     name: 'Cortado',
//     description: 'Equal parts espresso and warm milk — bold, balanced, beautiful.',
//     price: 4.50,
//     category: 'coffee',
//     image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=80',
//     tags: [],
//   },
//   {
//     name: 'Brown Sugar Oat Latte',
//     description: 'Espresso shots over ice with brown sugar syrup and creamy oat milk.',
//     price: 6.75,
//     category: 'coffee',
//     image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500&auto=format&fit=crop&q=80',
//     tags: ['popular', 'vegan'],
//   },

//   // ───── MATCHA (10) ─────
//   {
//     name: 'Classic Matcha Latte',
//     description: 'Ceremonial grade Uji matcha whisked with steamed oat milk. Our bestseller.',
//     price: 6.50,
//     category: 'matcha',
//     image: 'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?w=500&auto=format&fit=crop&q=80',
//     tags: ['popular', 'vegan'],
//   },
//   {
//     name: 'Iced Matcha Latte',
//     description: 'Vibrant green matcha poured over ice with creamy oat milk.',
//     price: 6.75,
//     category: 'matcha',
//     image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&auto=format&fit=crop&q=80',
//     tags: ['popular', 'vegan'],
//   },
//   {
//     name: 'Strawberry Matcha',
//     description: 'A dreamy blend of matcha and fresh strawberry puree — a pink and green swirl.',
//     price: 7.50,
//     category: 'matcha',
//     image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=500&auto=format&fit=crop&q=80',
//     tags: ['popular', 'seasonal'],
//   },
//   {
//     name: 'Matcha Honey Latte',
//     description: 'Matcha blended with raw honey and warm almond milk. Naturally sweet.',
//     price: 7.00,
//     category: 'matcha',
//     image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&auto=format&fit=crop&q=80',
//     tags: ['vegan'],
//   },
//   {
//     name: 'Hojicha Latte',
//     description: 'Roasted Japanese green tea with a toasty, caramel-like flavour profile.',
//     price: 6.50,
//     category: 'matcha',
//     image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&auto=format&fit=crop&q=80',
//     tags: ['vegan'],
//   },
//   {
//     name: 'Matcha Coconut Latte',
//     description: 'Tropical twist — ceremonial matcha with coconut milk and a hint of vanilla.',
//     price: 7.25,
//     category: 'matcha',
//     image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=500&auto=format&fit=crop&q=80',
//     tags: ['vegan', 'popular'],
//   },
//   {
//     name: 'Matcha Espresso Fusion',
//     description: 'A bold shot of espresso floated over a matcha latte. Two worlds collide.',
//     price: 7.75,
//     category: 'matcha',
//     image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=500&auto=format&fit=crop&q=80',
//     tags: ['new'],
//   },
//   {
//     name: 'Sparkling Matcha',
//     description: 'Ceremonial matcha shaken with sparkling water and a hint of citrus.',
//     price: 7.00,
//     category: 'matcha',
//     image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&auto=format&fit=crop&q=80',
//     tags: ['new', 'vegan'],
//   },
//   {
//     name: 'Matcha Affogato',
//     description: 'A scoop of vanilla ice cream drowned in a shot of strong matcha.',
//     price: 8.00,
//     category: 'matcha',
//     image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=80',
//     tags: ['seasonal', 'popular'],
//   },
//   {
//     name: 'Iced Hojicha',
//     description: 'Chilled roasted tea over ice — earthy, smooth and deeply comforting.',
//     price: 6.00,
//     category: 'matcha',
//     image: 'https://images.unsplash.com/photo-1562547256-2c5ee93b60b7?w=500&auto=format&fit=crop&q=80',
//     tags: ['vegan'],
//   },

//   // ───── PASTRIES (10) ─────
//   {
//     name: 'Butter Croissant',
//     description: 'Flaky, golden layers of pure French butter croissant. Baked fresh at 6 AM.',
//     price: 4.50,
//     category: 'pastries',
//     image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=80',
//     tags: ['popular'],
//   },
//   {
//     name: 'Strawberry Danish',
//     description: 'Buttery pastry filled with cream cheese and fresh strawberry jam.',
//     price: 5.25,
//     category: 'pastries',
//     image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=500&auto=format&fit=crop&q=80',
//     tags: ['popular', 'seasonal'],
//   },
//   {
//     name: 'Cinnamon Roll',
//     description: 'Soft, pillowy cinnamon roll with cream cheese frosting. Warm and gooey.',
//     price: 5.50,
//     category: 'pastries',
//     image: 'https://images.unsplash.com/photo-1635220975022-a0c6f5c90b6e?w=500&auto=format&fit=crop&q=80',
//     tags: ['popular'],
//   },
//   {
//     name: 'Matcha Pound Cake',
//     description: 'Dense, moist slice of ceremonial matcha pound cake with white chocolate.',
//     price: 5.75,
//     category: 'pastries',
//     image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500&auto=format&fit=crop&q=80',
//     tags: ['vegan'],
//   },
//   {
//     name: 'Chocolate Almond Tart',
//     description: 'Crisp pastry shell filled with dark chocolate ganache and roasted almonds.',
//     price: 6.50,
//     category: 'pastries',
//     image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=500&auto=format&fit=crop&q=80',
//     tags: ['popular'],
//   },
//   {
//     name: 'Blueberry Muffin',
//     description: 'Jumbo bakery-style muffin bursting with fresh blueberries and lemon zest.',
//     price: 4.25,
//     category: 'pastries',
//     image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500&auto=format&fit=crop&q=80',
//     tags: [],
//   },
//   {
//     name: 'Raspberry Macaron',
//     description: 'Two perfect shells of almond meringue with a raspberry buttercream filling.',
//     price: 3.75,
//     category: 'pastries',
//     image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=500&auto=format&fit=crop&q=80',
//     tags: ['gluten-free', 'popular'],
//   },
//   {
//     name: 'Banana Walnut Loaf',
//     description: 'Thick slice of moist banana bread with toasted walnuts and a caramel top.',
//     price: 4.75,
//     category: 'pastries',
//     image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=500&auto=format&fit=crop&q=80',
//     tags: ['vegan'],
//   },
//   {
//     name: 'Lavender Scone',
//     description: 'Soft, crumbly scone infused with lavender and topped with lemon glaze.',
//     price: 4.75,
//     category: 'pastries',
//     image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=80',
//     tags: ['seasonal'],
//   },
//   {
//     name: 'Rose Petal Éclair',
//     description: 'Classic choux pastry filled with rose cream and topped with ruby glaze.',
//     price: 6.75,
//     category: 'pastries',
//     image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=500&auto=format&fit=crop&q=80',
//     tags: ['seasonal', 'new'],
//   },

//   // ───── COLD DRINKS (10) ─────
//   {
//     name: 'Mango Passionfruit Cooler',
//     description: 'Fresh mango puree with passionfruit, sparkling water and mint.',
//     price: 6.50,
//     category: 'cold-drinks',
//     image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&auto=format&fit=crop&q=80',
//     tags: ['vegan', 'popular'],
//   },
//   {
//     name: 'Strawberry Lemonade',
//     description: 'House-squeezed lemonade blended with fresh strawberry puree and mint.',
//     price: 5.75,
//     category: 'cold-drinks',
//     image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500&auto=format&fit=crop&q=80',
//     tags: ['vegan', 'popular'],
//   },
//   {
//     name: 'Taro Milk Tea',
//     description: 'Creamy taro root blended with milk and honey, served over ice.',
//     price: 7.00,
//     category: 'cold-drinks',
//     image: 'https://images.unsplash.com/photo-1558857558-c8b74d736a5c?w=500&auto=format&fit=crop&q=80',
//     tags: ['popular'],
//   },
//   {
//     name: 'Brown Sugar Boba',
//     description: 'Handcrafted tapioca pearls in brown sugar syrup with fresh milk.',
//     price: 7.50,
//     category: 'cold-drinks',
//     image: 'https://images.unsplash.com/photo-1558615668-d7ef9c674660?w=500&auto=format&fit=crop&q=80',
//     tags: ['popular', 'new'],
//   },
//   {
//     name: 'Blueberry Lavender Soda',
//     description: 'House blueberry syrup with lavender and sparkling water. A purple dream.',
//     price: 6.00,
//     category: 'cold-drinks',
//     image: 'https://images.unsplash.com/photo-1570696516188-ade861b84a49?w=500&auto=format&fit=crop&q=80',
//     tags: ['vegan', 'seasonal'],
//   },
//   {
//     name: 'Peach Iced Tea',
//     description: 'Freshly brewed white tea over ice with ripe peach syrup. Light and delicate.',
//     price: 5.50,
//     category: 'cold-drinks',
//     image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&auto=format&fit=crop&q=80',
//     tags: ['vegan'],
//   },
//   {
//     name: 'Watermelon Mint Juice',
//     description: 'Cold-pressed watermelon blended with fresh mint and a squeeze of lime.',
//     price: 6.25,
//     category: 'cold-drinks',
//     image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=500&auto=format&fit=crop&q=80',
//     tags: ['vegan', 'gluten-free', 'seasonal'],
//   },
//   {
//     name: 'Rose Lychee Sparkler',
//     description: 'Lychee juice with rose syrup, fresh raspberries and sparkling water.',
//     price: 7.25,
//     category: 'cold-drinks',
//     image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop&q=80',
//     tags: ['vegan', 'seasonal', 'popular'],
//   },
//   {
//     name: 'Coconut Lime Refresh',
//     description: 'Sparkling coconut water with lime juice, mint and a salted rim.',
//     price: 6.00,
//     category: 'cold-drinks',
//     image: 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=500&auto=format&fit=crop&q=80',
//     tags: ['vegan', 'gluten-free'],
//   },
//   {
//     name: 'Banana Berry Smoothie',
//     description: 'Frozen banana, mixed berries, oat milk and a touch of honey. Thick and creamy.',
//     price: 7.75,
//     category: 'cold-drinks',
//     image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&auto=format&fit=crop&q=80',
//     tags: ['vegan', 'gluten-free'],
//   },
// ];

// async function seed() {
//   try {
//     console.log('🌸 Connecting to MongoDB...');
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log('✅ Connected!');

//     await MenuItem.deleteMany({});
//     console.log('🗑  Cleared old menu items');

//     const inserted = await MenuItem.insertMany(menuItems);
//     console.log(`\n🌸 Success! Inserted ${inserted.length} menu items:\n`);

//     const cats = ['coffee', 'matcha', 'pastries', 'cold-drinks'];
//     for (const cat of cats) {
//       const count = inserted.filter(i => i.category === cat).length;
//       const emoji = { coffee: '☕', matcha: '🍵', pastries: '🥐', 'cold-drinks': '🧋' }[cat];
//       console.log(`  ${emoji}  ${cat}: ${count} items`);
//     }

//     console.log('\n✨ Run your app and visit /menu to see all items!');
//     process.exit(0);
//   } catch (err) {
//     console.error('\n❌ Seed failed:', err.message);
//     process.exit(1);
//   }
// }

// seed();
// ============================================================
//  server/seedData.js
//  Copy this file into your SERVER folder (same level as server.js)
//
//  HOW TO RUN:
//    1. cd into your server folder
//    2. Make sure your .env file has MONGO_URI set
//    3. Run:  node seedData.js
// ============================================================

// ============================================================
//  server/seedData.js
//  Copy this file into your SERVER folder (same level as server.js)
//
//  HOW TO RUN:
//    1. cd into your server folder
//    2. Make sure your .env file has MONGO_URI set
//    3. Run:  node seedData.js
// ============================================================

import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

// ── Inline schema (no import needed, avoids path issues) ──
const menuItemSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  description: { type: String },
  price:       { type: Number, required: true },
  category:    { type: String, enum: ['coffee', 'matcha', 'pastries', 'cold-drinks'], required: true },
  image:       { type: String },
  tags:        [{ type: String }],
  available:   { type: Boolean, default: true },
}, { timestamps: true });

const MenuItem = mongoose.models.MenuItem || mongoose.model('MenuItem', menuItemSchema);

// ── 40 items with unique, verified Unsplash images ──
const menuItems = [
  // ───── COFFEE (10) ─────
  {
    name: 'Classic Espresso',
    description: 'Rich, bold shot of our signature single-origin espresso blend.',
    price: 3.50,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&auto=format&fit=crop&q=80',
    tags: ['popular'],
  },
  {
    name: 'Lavender Latte',
    description: 'Velvety espresso with house-made lavender syrup and oat milk foam.',
    price: 6.50,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=80',
    tags: ['popular', 'vegan'],
  },
  {
    name: 'Rose Cappuccino',
    description: 'Double espresso topped with rosewater-infused micro-foam.',
    price: 6.00,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=80',
    tags: [],
  },
  {
    name: 'Vanilla Bean Latte',
    description: 'Creamy whole milk latte infused with real vanilla bean paste.',
    price: 6.25,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=500&auto=format&fit=crop&q=80',
    tags: ['popular'],
  },
  {
    name: 'Cold Brew',
    description: 'Slow-steeped 18 hours. Smooth, naturally sweet, zero bitterness.',
    price: 5.50,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=80',
    tags: ['vegan'],
  },
  {
    name: 'Caramel Macchiato',
    description: 'Layered espresso, vanilla syrup, steamed milk and caramel drizzle.',
    price: 6.50,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&auto=format&fit=crop&q=80',
    tags: [],
  },
  {
    name: 'Mocha Latte',
    description: 'House espresso with rich dark chocolate sauce and steamed milk.',
    price: 6.75,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=500&auto=format&fit=crop&q=80',
    tags: [],
  },
  {
    name: 'Honey Flat White',
    description: 'Silky micro-foam espresso drink with a drizzle of wildflower honey.',
    price: 5.75,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&auto=format&fit=crop&q=80',
    tags: [],
  },
  {
    name: 'Cortado',
    description: 'Equal parts espresso and warm milk — bold, balanced, beautiful.',
    price: 4.50,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=80',
    tags: [],
  },
  {
    name: 'Brown Sugar Oat Latte',
    description: 'Espresso shots over ice with brown sugar syrup and creamy oat milk.',
    price: 6.75,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500&auto=format&fit=crop&q=80',
    tags: ['popular', 'vegan'],
  },

  // ───── MATCHA (10) ─────
  {
    name: 'Classic Matcha Latte',
    description: 'Ceremonial grade Uji matcha whisked with steamed oat milk. Our bestseller.',
    price: 6.50,
    category: 'matcha',
    image: 'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?w=500&auto=format&fit=crop&q=80',
    tags: ['popular', 'vegan'],
  },
  {
    name: 'Iced Matcha Latte',
    description: 'Vibrant green matcha poured over ice with creamy oat milk.',
    price: 6.75,
    category: 'matcha',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&auto=format&fit=crop&q=80',
    tags: ['popular', 'vegan'],
  },
  {
    name: 'Strawberry Matcha',
    description: 'A dreamy blend of matcha and fresh strawberry puree — a pink and green swirl.',
    price: 7.50,
    category: 'matcha',
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=500&auto=format&fit=crop&q=80',
    tags: ['popular', 'seasonal'],
  },
  {
    name: 'Matcha Honey Latte',
    description: 'Matcha blended with raw honey and warm almond milk. Naturally sweet.',
    price: 7.00,
    category: 'matcha',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=500&auto=format&fit=crop&q=80',
    tags: ['vegan'],
  },
  {
    name: 'Hojicha Latte',
    description: 'Roasted Japanese green tea with a toasty, caramel-like flavour profile.',
    price: 6.50,
    category: 'matcha',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&auto=format&fit=crop&q=80',
    tags: ['vegan'],
  },
  {
    name: 'Matcha Coconut Latte',
    description: 'Tropical twist — ceremonial matcha with coconut milk and a hint of vanilla.',
    price: 7.25,
    category: 'matcha',
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=500&auto=format&fit=crop&q=80',
    tags: ['vegan', 'popular'],
  },
  {
    name: 'Matcha Espresso Fusion',
    description: 'A bold shot of espresso floated over a matcha latte. Two worlds collide.',
    price: 7.75,
    category: 'matcha',
    image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=500&auto=format&fit=crop&q=80',
    tags: ['new'],
  },
  {
    name: 'Sparkling Matcha',
    description: 'Ceremonial matcha shaken with sparkling water and a hint of citrus.',
    price: 7.00,
    category: 'matcha',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&auto=format&fit=crop&q=80',
    tags: ['new', 'vegan'],
  },
  {
    name: 'Matcha Affogato',
    description: 'A scoop of vanilla ice cream drowned in a shot of strong matcha.',
    price: 8.00,
    category: 'matcha',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=80',
    tags: ['seasonal', 'popular'],
  },
  {
    name: 'Iced Hojicha',
    description: 'Chilled roasted tea over ice — earthy, smooth and deeply comforting.',
    price: 6.00,
    category: 'matcha',
    image: 'https://images.unsplash.com/photo-1562547256-2c5ee93b60b7?w=500&auto=format&fit=crop&q=80',
    tags: ['vegan'],
  },

  // ───── PASTRIES (10) ─────
  {
    name: 'Butter Croissant',
    description: 'Flaky, golden layers of pure French butter croissant. Baked fresh at 6 AM.',
    price: 4.50,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=80',
    tags: ['popular'],
  },
  {
    name: 'Strawberry Danish',
    description: 'Buttery pastry filled with cream cheese and fresh strawberry jam.',
    price: 5.25,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1525203135335-74d272fc8d9c?w=500&auto=format&fit=crop&q=80',
    tags: ['popular', 'seasonal'],
  },
  {
    name: 'Cinnamon Roll',
    description: 'Soft, pillowy cinnamon roll with cream cheese frosting. Warm and gooey.',
    price: 5.50,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=500&auto=format&fit=crop&q=80',
    tags: ['popular'],
  },
  {
    name: 'Matcha Pound Cake',
    description: 'Dense, moist slice of ceremonial matcha pound cake with white chocolate.',
    price: 5.75,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500&auto=format&fit=crop&q=80',
    tags: ['vegan'],
  },
  {
    name: 'Chocolate Almond Tart',
    description: 'Crisp pastry shell filled with dark chocolate ganache and roasted almonds.',
    price: 6.50,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=500&auto=format&fit=crop&q=80',
    tags: ['popular'],
  },
  {
    name: 'Blueberry Muffin',
    description: 'Jumbo bakery-style muffin bursting with fresh blueberries and lemon zest.',
    price: 4.25,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500&auto=format&fit=crop&q=80',
    tags: [],
  },
  {
    name: 'Raspberry Macaron',
    description: 'Two perfect shells of almond meringue with a raspberry buttercream filling.',
    price: 3.75,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=500&auto=format&fit=crop&q=80',
    tags: ['gluten-free', 'popular'],
  },
  {
    name: 'Banana Walnut Loaf',
    description: 'Thick slice of moist banana bread with toasted walnuts and a caramel top.',
    price: 4.75,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=500&auto=format&fit=crop&q=80',
    tags: ['vegan'],
  },
  {
    name: 'Lavender Scone',
    description: 'Soft, crumbly scone infused with lavender and topped with lemon glaze.',
    price: 4.75,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=80',
    tags: ['seasonal'],
  },
  {
    name: 'Rose Petal Éclair',
    description: 'Classic choux pastry filled with rose cream and topped with ruby glaze.',
    price: 6.75,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=500&auto=format&fit=crop&q=80',
    tags: ['seasonal', 'new'],
  },

  // ───── COLD DRINKS (10) ─────
  {
    name: 'Mango Passionfruit Cooler',
    description: 'Fresh mango puree with passionfruit, sparkling water and mint.',
    price: 6.50,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&auto=format&fit=crop&q=80',
    tags: ['vegan', 'popular'],
  },
  {
    name: 'Strawberry Lemonade',
    description: 'House-squeezed lemonade blended with fresh strawberry puree and mint.',
    price: 5.75,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500&auto=format&fit=crop&q=80',
    tags: ['vegan', 'popular'],
  },
  {
    name: 'Taro Milk Tea',
    description: 'Creamy taro root blended with milk and honey, served over ice.',
    price: 7.00,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=500&auto=format&fit=crop&q=80',
    tags: ['popular'],
  },
  {
    name: 'Brown Sugar Boba',
    description: 'Handcrafted tapioca pearls in brown sugar syrup with fresh milk.',
    price: 7.50,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=500&auto=format&fit=crop&q=80',
    tags: ['popular', 'new'],
  },
  {
    name: 'Blueberry Lavender Soda',
    description: 'House blueberry syrup with lavender and sparkling water. A purple dream.',
    price: 6.00,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1570696516188-ade861b84a49?w=500&auto=format&fit=crop&q=80',
    tags: ['vegan', 'seasonal'],
  },
  {
    name: 'Peach Iced Tea',
    description: 'Freshly brewed white tea over ice with ripe peach syrup. Light and delicate.',
    price: 5.50,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=500&auto=format&fit=crop&q=80',
    tags: ['vegan'],
  },
  {
    name: 'Watermelon Mint Juice',
    description: 'Cold-pressed watermelon blended with fresh mint and a squeeze of lime.',
    price: 6.25,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=500&auto=format&fit=crop&q=80',
    tags: ['vegan', 'gluten-free', 'seasonal'],
  },
  {
    name: 'Rose Lychee Sparkler',
    description: 'Lychee juice with rose syrup, fresh raspberries and sparkling water.',
    price: 7.25,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop&q=80',
    tags: ['vegan', 'seasonal', 'popular'],
  },
  {
    name: 'Coconut Lime Refresh',
    description: 'Sparkling coconut water with lime juice, mint and a salted rim.',
    price: 6.00,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=500&auto=format&fit=crop&q=80',
    tags: ['vegan', 'gluten-free'],
  },
  {
    name: 'Banana Berry Smoothie',
    description: 'Frozen banana, mixed berries, oat milk and a touch of honey. Thick and creamy.',
    price: 7.75,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&auto=format&fit=crop&q=80',
    tags: ['vegan', 'gluten-free'],
  },
];

async function seed() {
  try {
    console.log('🌸 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected!');

    await MenuItem.deleteMany({});
    console.log('🗑  Cleared old menu items');

    const inserted = await MenuItem.insertMany(menuItems);
    console.log(`\n🌸 Success! Inserted ${inserted.length} menu items:\n`);

    const cats = ['coffee', 'matcha', 'pastries', 'cold-drinks'];
    for (const cat of cats) {
      const count = inserted.filter(i => i.category === cat).length;
      const emoji = { coffee: '☕', matcha: '🍵', pastries: '🥐', 'cold-drinks': '🧋' }[cat];
      console.log(`  ${emoji}  ${cat}: ${count} items`);
    }

    console.log('\n✨ Run your app and visit /menu to see all items!');
    process.exit(0);
  } catch (err) {
    console.error('\n❌ Seed failed:', err.message);
    process.exit(1);
  }
}

seed();