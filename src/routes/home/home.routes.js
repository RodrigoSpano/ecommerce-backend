import {Router} from 'express' 
import passport from 'passport';

const router = Router()

router.get('/', passport.authenticate('jwt', { session: true }), (req, res) => {
  res.redirect('/products');
});

export default router;