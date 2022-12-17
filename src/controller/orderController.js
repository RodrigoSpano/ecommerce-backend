import OrderApi from '../api/orders/orderApi.js';
import prodModel from '../models/prodModel.js';
import { v4 as uuid } from 'uuid';

const order = new OrderApi();

export const createOrder = async (req, res) => {
  try {
    let prods = [];
    for (const el of req.body) {
      await prodModel.findById(el.prodId).then((resp) => {
        prods.push({
          title: resp.title,
          price: resp.price,
          quantity: el.quantity,
          productId: el.prodId
        });
      });
    }
    const total = await prods.reduce((acc, el) => acc += (el.price * el.quantity), 0)
    const createOrder = await order.createOrder({
      products: prods,
      email: req.user.email,
      date: new Date(),
      orderNumber: uuid(),
      totalPrice: total
    });
    res.json({
      success: true,
      order: createOrder,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
