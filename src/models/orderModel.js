import { Schema, model } from 'mongoose';
import { cartSchema } from './cartModel';
import { v4 as uuid} from 'uuid'

const orderSchema = new Schema({
  products: {
    type: [cartSchema],
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
  }
});

orderSchema.pre('save', (next) => {
  const order = this;
  if(!order.isModified('orderNumber')) return next()
  order.orderNumber = uuid()
  order.date = new Date()
  return next()
})

export default model('order', orderSchema)