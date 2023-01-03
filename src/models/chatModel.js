import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  type: {
    type: String,
    default: 'user'
  },
  date: Date,
  body: {
    type: String,
  }
})

const chatSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  messages: {
    type: [messageSchema]
  }
})

export default mongoose.model('chat', chatSchema)