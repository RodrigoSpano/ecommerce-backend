import OrderApi from '../api/orders/orderApi.js';

const order = new OrderApi()

export const createOrder = async (req, res) => {
  try {
    const data = {...req.body, email: req.email}
    const newOrder = await order.createOrder(data)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}