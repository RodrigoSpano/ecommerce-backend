import {Router} from 'express' 
import passport from 'passport'
import authRoute from './auth/auth.js'

const router = Router()

//TODO acomodar rutas
router.get('/', passport.authenticate('jwt', {failureRedirect: '/auth/login'}) ,(req, res) => {
  res.json('your are logged')
})

router.use('/auth', authRoute)

export default router;