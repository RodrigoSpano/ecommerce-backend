import mongoose from 'mongoose';

// const chatSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     strim: true
//   },
//   type: {
//     type: String,
//     default: 'user'
//   },
//   date: Date,
//   body: {
//     type: String,
//     required: true,
//     strim: true
//   }
// })

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