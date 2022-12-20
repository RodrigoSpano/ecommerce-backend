import {Router} from 'express' 
import { alreadyExists } from '../../middlewares/authMiddleware.js'
import * as authControllers from '../../controller/authController.js'

const router = Router()

router.post('/signup', alreadyExists, authControllers.signUp)
router.post('/login', authControllers.logIn)
router.delete('/logout', authControllers.logOut)

export default router;