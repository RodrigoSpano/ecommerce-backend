import { Schema, model } from 'mongoose'

const cartSchema = new Schema({
  prodId: {
    type: Schema.Types.ObjectId || String,
    required: true,
    unique: true
  },
  userId: {
    type: Schema.Types.ObjectId || String,
    required: true,
  },
  quantity: {
    type: Number,
    min:1,
    required: true
  }
}, {timestamps: true})

export default model('cart', cartSchema)