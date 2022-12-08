import mongoose from 'mongoose';

// process.env.MONGO_URI for run it LOCAL
const URI = process.env.ATLAS_URI

mongoose.set('strictQuery', false)
mongoose.connect(URI)
  .then(() => console.log('mongodb connected'))