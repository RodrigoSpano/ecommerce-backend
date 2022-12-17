import { Schema, model } from 'mongoose';

const itemsOrderSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    require: true,
    default: 1
  },
  productId: Schema.Types.ObjectId
})

const orderSchema = new Schema({
  products: {
    type: [itemsOrderSchema],
    required: true
  },
  orderNumber: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    required: true
  },
  state: {
    type: String,
    default: 'generated',
  },
  email: {
    type: String,
    required: true,
    strim: true
  },
  totalPrice: {
    type: Number,
    required: true,
  }
});

export default model('order', orderSchema)