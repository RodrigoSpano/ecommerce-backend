import {Router} from 'express' 
import * as orderControllers from '../../controller/orderController.js'

const router = Router()

router.post('/', orderControllers.createOrder)

export default router;