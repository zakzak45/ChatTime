import express  from 'express'
import { getUserForSideBar,getMessages} from '../controllers/messageController.js'
import { protectRoute } from '../middleware/authMiddleware.js'


const router = express.Router()


router.get('/users',protectRoute,getUserForSideBar)
router.get("/:id",protectRoute,getMessages)




export default router