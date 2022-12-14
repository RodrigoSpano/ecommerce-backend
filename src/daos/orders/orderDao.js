import orderDto from './orderDto.js';
import orderModel from '../../models/orderModel.js';

class OrderDao {
  constructor() {}

  async createOrder(data) {
    try {
      const newOrder = new orderModel(data);
      await newOrder.save();
      return orderDto(newOrder);
    } catch (error) {
      return error;
    }
  }

  async getOrders() {
    try {
      const orders = await orderModel.find({});
      return orderDto(orders);
    } catch (error) {
      return error;
    }
  }

  async getOneOrder(orderNumber) {
    try {
      const order = await orderModel.findOne({ orderNumber });
      return orderDto(order)
    } catch (error) {
      return error;
    }
  }

  async deleteOrder(orderNumber){
    try {
      await orderModel.deleteOne({orderNumber})
    } catch (error) {
      return error
    }
  }

}


export default OrderDao;
