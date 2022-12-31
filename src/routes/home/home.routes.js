import {Router} from 'express' 
import passport from 'passport';

const router = Router()

router.get('/', passport.authenticate('jwt', { session: true, failureRedirect: '/auth/login', successRedirect: '/products' }), (req, res) => {
});

export default router;