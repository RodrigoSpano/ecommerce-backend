import OrderApi from '../api/orders/orderApi.js';
import prodModel from '../models/prodModel.js';
import { nanoid } from 'nanoid';

const order = new OrderApi();

export const createOrder = async (req, res) => {
  try {
    let prods = [];
    for (const el of req.body) {
      await prodModel.updateOne(
        { _id: el.prodId },
        { $inc: { stock: -el.quantity } }
      );
      await prodModel.findById(el.prodId).then((resp) => {
        prods.push({
          title: resp.title,
          price: resp.price,
          quantity: el.quantity,
          productId: el.prodId,
        });
      });
    }
    let total = await prods.reduce(
      (acc, el) => (acc += el.price * el.quantity),
      0
    );
    const createOrder = await order.createOrder({
      products: prods,
      email: req.user.email,
      date: new Date(),
      orderNumber: nanoid(),
      totalPrice: total,
    });
    res.status(200).json({
      success: true,
      order: createOrder,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await order.getOrders();
    res.status(200).json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getOneOrder = async (req, res) => {
  try {
    const oneOrder = await order.getOneOrder(req.paramas.orderNumber);
    res.status(200).json({ success: true, order: oneOrder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    await order.deleteOrder(req.params.orderNumber);
    res.json({ success: true, orderDeleted: req.params.orderNumber });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
