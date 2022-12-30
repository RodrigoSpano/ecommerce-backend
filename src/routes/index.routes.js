import {Router} from 'express' 
import authRoute from './auth/auth.routes.js'
import productsRoute from './products/products.routes.js'
import cartRoute from './cart/cart.router.js'
import orderRoute from './order/order.routes.js'
import homeRoute from './home/home.routes.js'
import infoRoute from './info/info.routes.js'
import chatRoute from './chat/chat.routes.js'
import { isAuth } from '../middlewares/authMiddleware.js'

const router = Router()

router.use('/', homeRoute)
router.use('/info', isAuth, infoRoute)
router.use('/auth', authRoute)
router.use('/products', isAuth, productsRoute)
router.use('/cart', isAuth, cartRoute)
router.use('/order', isAuth, orderRoute)
router.use('/chat', chatRoute)
//el chat no esta protegido x el authToken xq al no tener el front de lo demas no puedo mandarle el token por el header

export default router;