import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    default: false
  }
})

userSchema.pre('save', function(next){
  const user = this;
  if(!user.isModified('password')) return next()

  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10))
  return next()
})

userSchema.methods.comparePassword = function(password){
  let user = this;
  let userObj = user.toObject()
  return bcrypt.compareSync(password, userObj.password)
}

userSchema.methods.createToken = function(){
  const user = this
  return jwt.sign({id: user.id, email: user.email}, process.env.SECRET, {expiresIn: '60m'})
}

export default model('User', userSchema)