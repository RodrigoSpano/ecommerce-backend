import OrderDao from '../../daos/orders/orderDao.js';

class OrderApi{
  constructor(){
    this.dao = new OrderDao()
  }

  async createOrder(data){
    return await this.dao.createOrder(data)
  }

  async getOrders(){
    return await this.dao.getOrders()
  }

  async getOneOrder(orderNumber){
    return await this.dao.getOneOrder(orderNumber)
  }

  async deleteOrder(orderNumber){
    return await this.dao.deleteOrder(orderNumber)
  }

}

export default OrderApi