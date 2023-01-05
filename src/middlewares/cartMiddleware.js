import Cart from '../models/cartModel.js'

export const postMiddleware = async (req, res, next) => {
  const findCart = await Cart.findOne({email: req.user.email})
  if(!findCart) {
    const newCartData = {
      email: req.user.email,
      date: new Date(),
      items: [],
    }
    const cart = new Cart(newCartData)
    await cart.save()
  }
  return next()
}

export const verifyProd = async (req,res,next) => {
  await Cart.findOne({email:req.user.email})
    .then(resp => {
      if(resp){
        const findProd = resp.items.some(el => el.prodId.toString() === req.params.prodId)
        if(!findProd) return res.status(404).json({error: 'product not found'})
        return next()
      }
      return res.status(500).json({error: "cart doesn't exists"})
    }).catch(err => res.staus(500).json({error: err.message}))
}
