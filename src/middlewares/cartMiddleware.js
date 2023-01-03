import Cart from '../models/cartModel.js'

export const postMiddleware = async (req, res, next) => {
  const findCart = await Cart.findOne({email: req.user.email})
  if(!findCart) {
    const newCartData = {
      email: req.user.email,
      date: new Date(),
      items: []
    }
    const cart = new Cart(newCartData)
    await cart.save()
  }
  return next()
}

export const verifyProd = async (req,res,next) => {
  const {id} = req.params
  await Cart.findOne({_id: id})
  .then((prod) => {
    if(prod) return next()
    res.status(404).json({error: "product doesn't exist"})
  }).catch(error => res.status(500).json({error: error.message}))
}