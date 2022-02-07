import { Router } from 'express'

// import * as transactionController from '../controllers/transactionController.js'

import authMiddleware from '../middlewares/authMiddleware.js'


const router = new Router()

router.use(authMiddleware)

// router.post('', movementController.sendTransaction)


export default router
