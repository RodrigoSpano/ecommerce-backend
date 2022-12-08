import Users from '../models/userModel.js'

export const isAuth = async (req, res, next) => {
  if(!req.isAuthenticated()) return res.redirect('/auth/login')
  return next()
}

export const alreadyExists = async (req, res, next) => {
  const findUser = await Users.findOne({email: req.body.email})
  if(!findUser) return next()
  return res.status(400).json({error: 'user already exists'})
}