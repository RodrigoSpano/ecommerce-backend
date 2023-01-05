import cartModel from '../models/cartModel.js';
import userModel from '../models/userModel.js';

export const MONGO_CONFIG = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}

export const findAdmin = async () => {
  const admin = await userModel.findOne({ admin: true });
  return admin.email;
};

export const emailData = async (data) => {
  data.map(el => (
    `<ul>
      "item"
      <li>${el.title}</li>
      <li>${el.productId}</li>
      <li>${el.quantity}</li>
    </ul>`
  ))
}

export const validateProductCart = async (items, email) => {
  const searchProd = await cartModel.findOne({email})
  for(const item of items){
    return searchProd.items.some(el => el.prodId.toString() === item.prodId.toString())
  }
}