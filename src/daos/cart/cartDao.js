import Cart from '../../models/cartModel.js'
import asDto from './cartDto.js'

class CartDao {
  constructor() {}

  async getAll(email) {
    try {
      const carts = await Cart.findOne({ email });
      return asDto(carts);
    } catch (error) {
      return error;
    }
  }

  async addToCart(data, email) {
    try {
      const prodCart = await Cart.findOneAndUpdate(
        { email },
        { $push: { items: data.items }, address: data.address}, {new: true}
      );
      return asDto(prodCart);
    } catch (error) {
      return error;
    }
  }

  async updateOne(email, prodId, quantity) {
    try {
      await Cart.findOne({email})
        .then(doc => {
          const findItem = doc.items.find(el => el.prodId.toString() === prodId)
          findItem.quantity = quantity
          doc.save()
        }).catch(err => console.log(err))
    } catch (error) {
      return error;
    }
  }

  async deleteOne(prodId, email) {
    try {
      await Cart.findOneAndUpdate({email}, {$pull: {items: {prodId: prodId}}}, {new: true})
    } catch (error) {
      return error;
    }
  }

  async deleteAll(email) {
    try {
      await Cart.findOneAndUpdate({email}, {$set: {"items": []}}, {new: true});
    } catch (error) {
      return error;
    }
  }
}

export default CartDao