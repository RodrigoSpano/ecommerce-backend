import {Router} from 'express' 
import * as cartController from '../../controller/cartController.js'
import * as cartMiddleware from '../../middlewares/cartMiddleware.js'

const router = Router()

router.get('/', cartController.getAll)
router.post('/', cartMiddleware.postMiddleware,cartController.addToCart)
router.put('/:prodId', cartMiddleware.verifyProd,cartController.updateOne)
router.delete('/:id', cartMiddleware.verifyProd,cartController.deleteOne)
router.delete('/', cartController.deleteAll)

export default router;