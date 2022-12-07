import {Router} from 'express' 
import * as authControllers from '../../controller/authController.js'

const router = Router()

router.post('/signup', authControllers.signUp)
router.post('/login', authControllers.logIn)
router.delete('/logout', authControllers.logOut)

export default router;