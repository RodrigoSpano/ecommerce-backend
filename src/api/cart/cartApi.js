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

  async updateOne(){
    return await this.dao.updateOne()
  }

  async deleteOne(id){
    return await this.dao.deleteOne(id)
  }

  async deleteAll(){
    return await this.dao.deleteAll()
  }
}

export default CartApi