import { Schema, model } from 'mongoose'

export const cartSchema = new Schema({
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
})

export default model('cart', cartSchema)