import asDto from './cartDto.js'
import Cart from '../../models/cartModel.js'

class CartDao{
  constructor(){}

  async getAll(){
    try {
      const carts = await Cart.findOne({email: req.user.email})
      return asDto(carts)
    } catch (error) {
      return error
    }
  }

  async addToCart(data){
    try {
      const prodCart = await Cart.findOneAndUpdate({email: req.user.email}, {$push: {items: data.items}},{address: data.address})
      return asDto(prodCart)
    } catch (error) {
      return error
    }
  }

  async updateOne(_id, data){
    try {
      const prod = await Cart.findOneAndUpdate({_id}, {items: data}, {new: true})
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