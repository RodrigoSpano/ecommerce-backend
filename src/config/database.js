import mongoose from 'mongoose';

const URI = process.env.MONGO_URI
mongoose.set('strictQuery', false)
mongoose.connect(URI)
  .then(() => console.log('mongodb connected'))