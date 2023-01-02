import userModel from '../models/userModel.js';

export const MONGO_CONFIG = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}

export const findAdmin = async () => {
  const admin = await userModel.findOne({ admin: true });
  console.log(admin.email);
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