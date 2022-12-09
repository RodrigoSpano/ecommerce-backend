import {Router} from 'express' 
import * as prodController from '../../controller/productsController.js'
import * as prodsMiddleware from '../../middlewares/prodMiddleware.js'

const router = Router()

router.get('/', 
  prodsMiddleware.isEmpty, 
  prodController.getAll)

router.get('/:id',
  prodsMiddleware.getByIdVerify,
  prodController.getOne)

router.get('/category/:category',
  prodsMiddleware.getByCategoryVerify,
  prodController.getByCategory)

router.post('/', 
  prodsMiddleware.prodAlreadyExists, 
  prodController.addOne)

router.put('/:id',
  prodsMiddleware.getByIdVerify,
  prodController.putOne)

router.delete('/:id', 
  prodsMiddleware.getByIdVerify,
  prodController.deleteOne)

router.delete('/', 
  prodController.deleteAll)

export default router;