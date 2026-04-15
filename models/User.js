import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name:         { type: String, required: true, trim: true },
  email:        { type: String, required: true, unique: true, lowercase: true },
  password:     { type: String, required: true, minlength: 8 },
  role:         { type: String, enum: ['user', 'admin'], default: 'user' },
  refreshToken: { type: String },
}, { timestamps: true });

// Remove the duplicate index line below — 'unique: true' already creates one
// userSchema.index({ email: 1 });  ← DELETE THIS LINE (it causes the warning too)

// ✅ Promise-based async hook — no `next` parameter needed
userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 12);
});

userSchema.methods.matchPassword = async function (plain) {
  return bcrypt.compare(plain, this.password);
};

export default mongoose.model('User', userSchema);