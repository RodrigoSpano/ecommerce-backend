import mongoose from 'mongoose';

const URI = process.env.MONGO_URI
mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(() => console.log('mongodb connected'))