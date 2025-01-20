const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cart: { type: Array, default: [] },
    isAdmin: { type: Boolean, default: false },
    orders: { type: Array, default: [] },
    contact: { type: Number, required: true },
    picture: { type: mongoose.Schema.Types.Mixed, required: false }
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)

module.exports = User
