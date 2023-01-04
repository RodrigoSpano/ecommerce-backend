import { Schema, model } from 'mongoose'

const itemSchema = new Schema({
  prodId: {
    type: Schema.Types.ObjectId || String,
    unique: true
  },
  quantity: {
    type: Number,
    min:1,
  }
})

const cartSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  date: Date,
  items: {
    type: [itemSchema]
  },
  address: String
})

export default model('cart', cartSchema)