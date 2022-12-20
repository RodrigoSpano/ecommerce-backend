import {Router} from 'express' 
import * as orderControllers from '../../controller/orderController.js'
import * as orderMiddlewares from '../../middlewares/orderMiddleware.js'

const router = Router()

router.post('/', orderMiddlewares.verifyStock, orderControllers.createOrder)
router.get('/', orderControllers.getOrders)
router.get('/:orderNumber', orderControllers.getOneOrder)
router.delete('/:orderNumber', orderMiddlewares.orderExists, orderControllers.deleteOrder)

export default router;