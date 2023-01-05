import CartDao from '../../daos/cart/cartDao.js';

class CartApi{
  constructor(){
    this.dao = new CartDao()
  }

  async getAll(email){
    return await this.dao.getAll(email)
  }

  async addToCart(data, email){
    return await this.dao.addToCart(data, email)
  }

  async updateOne(email, prodId, quantity){
    return await this.dao.updateOne(email, prodId, quantity)
  }

  async deleteOne(prodId, email){
    return await this.dao.deleteOne(prodId, email)
  }

  async deleteAll(email){
    return await this.dao.deleteAll(email)
  }
}

export default CartApi