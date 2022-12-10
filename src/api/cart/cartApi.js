import CartDao from '../../daos/cart/cartDao.js';

class CartApi{
  constructor(){
    this.dao = new CartDao()
  }

  async getAll(){
    return await this.dao.getAll()
  }

  async addToCart(data){
    return await this.dao.addToCart(data)
  }

  async updateOne(id, data){
    return await this.dao.updateOne(id, data)
  }

  async deleteOne(id){
    return await this.dao.deleteOne(id)
  }

  async deleteAll(){
    return await this.dao.deleteAll()
  }
}

export default CartApi