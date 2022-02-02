import { Router } from 'express'

// import * as movementController from '../controllers/movementController.js'

import authMiddleware from '../middlewares/authMiddleware.js'


const router = new Router()

router.use(authMiddleware)

// router.post('', movementController.postMovement)


export default router
