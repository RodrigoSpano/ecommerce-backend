import {Router} from 'express' 
import * as prodController from '../../controller/productsController.js'
import * as prodsMiddleware from '../../middlewares/prodMiddleware.js'

const router = Router()

router.get('/', prodsMiddleware.isEmpty, prodController.getAll)
router.get('/:id', prodController.getOne)
router.get('/:category',prodController.getByCategory)
router.post('/', prodsMiddleware.prodAlreadyExists, prodController.addOne)
router.post('/:id', prodController.putOne)
router.post('/:id', prodController.deleteOne)
router.post('/', prodController.deleteAll)

export default router;