import {Router} from 'express' 
import authRoute from './auth/auth.js'

const router = Router()

router.use('/auth', authRoute)

export default router;