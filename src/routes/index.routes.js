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
router.use('/info', infoRoute)
router.use('/chat', chatRoute)
router.use('/auth', authRoute)
router.use('/products', isAuth, productsRoute)
router.use('/cart', isAuth, cartRoute)
router.use('/order', isAuth, orderRoute)

export default router;