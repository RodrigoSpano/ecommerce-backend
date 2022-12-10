import asDto from './cartDto.js'
import Cart from '../../models/cartModel.js'

class CartDao{
  constructor(){}

  async getAll(){
    try {
      const cartProds = await Cart.find({})
      return asDto(cartProds)
    } catch (error) {
      return error
    }
  }

  async addToCart(data){
    try {
      const prodCart = new Cart(data)
      await prodCart.save()
      return asDto(prodCart)
    } catch (error) {
      return error
    }
  }

  async updateOne(_id, data){
    try {
      const prod = await Cart.findOneAndUpdate({_id}, data, {new: true})
      return asDto(prod)

    } catch (error) {
      return error
    }
  }

  async deleteOne(_id){
    try {
      await Cart.deleteOne({_id})
    } catch (error) {
      return error
    }
  }

  async deleteAll(){
    try {
      await Cart.deleteMany({})
    } catch (error) {
      return error
    }
  }

}

export default CartDao