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

  async updateOne(_id, data) {
    try {
      
    } catch (error) {
      return error;
    }
  }

  async deleteOne(_id) {
    try {
      await Cart.deleteOne({ _id });
    } catch (error) {
      return error;
    }
  }

  async deleteAll() {
    try {
      await Cart.deleteMany({});
    } catch (error) {
      return error;
    }
  }
}

export default CartDao