import { Schema, model } from 'mongoose'

const prodSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    trim: true
  },
  description: {
    type: String,
    required: true,
    min: 0,
    max:360,
    strim: true
  },
  images: {
    type: Array,
    required:true,
    min: 1
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
    max: 99
  },
  category: {
    type: Array,
    required: true,
    min:1,
  },
  author: {
    type: String,
    requied: true,
    trim: true
  }
},{
  timestamps: true
})

export default model('product', prodSchema)