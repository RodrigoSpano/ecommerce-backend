import {Router} from 'express' 
import passport from 'passport'
import authRoute from './auth/auth.routes.js'
import productsRoute from './products/products.routes.js'
import cartRoute from './cart/cart.router.js'

const router = Router()

//TODO acomodar rutas
router.get('/', passport.authenticate('jwt', {session: true }) ,(req, res) => {
  res.json('your are logged')
})

router.use('/auth', authRoute)
router.use('/products', productsRoute)
router.use('/cart', cartRoute)

export default router;