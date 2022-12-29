import {Router} from 'express' 
import * as controller from '../../controller/chatController.js'
import { chatExists } from '../../middlewares/chatMiddleware.js';

const router = Router()

router.get('/', chatExists, controller.getChat)

export default router;