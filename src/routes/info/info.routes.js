import {Router} from 'express' 
import { findAdmin } from '../../utilities/helpers.js'

const router = Router()

const data = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  ADMIN_MAIL: await findAdmin(),
  SESSION_EXPIRES: 6000000
}

router.get('/', (req, res) => {
  res.render('info', {data})
})

export default router;