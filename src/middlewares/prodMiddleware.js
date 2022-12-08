import Prods from '../models/prodModel.js'

export const isEmpty = async (req, res, next) => {
  const prods = await Prods.find({})
  if(prods.length > 0) return next()
  return res.status(404).json({error: 'products is empty'})
}

export const prodAlreadyExists = async (req,res, next) => {
  const {title} = req.body
  const product = await Prods.findOne({title})
  if(!product) return next()
  res.status(400).json({error: 'product already exist'})
}

export const categoriesVerify = async (req, res, next) => {

}