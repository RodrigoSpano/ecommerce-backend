import {Router} from 'express' 

const router = Router()

const data = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
}

router.get('/', (req, res) => {
  res.render('info', {data})
})

export default router;