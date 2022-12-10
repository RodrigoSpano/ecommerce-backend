import Cart from '../models/cartModel.js'

export const alreadyExists = async (req, res, next) => {
  const { prodId } = req.body
  const findProd = await Cart.findOne({prodId})
  if(!findProd) return next()
  res.status(400).json({error: 'already on cart'})
}

export const verifyProd = async (req,res,next) => {
  const {id} = req.params
  await Cart.findOne({_id: id})
  .then((prod) => {
    if(prod) return next()
    res.status(404).json({error: "product doesn't exist"})
  }).catch(error => res.status(500).json({error: error.message}))
}