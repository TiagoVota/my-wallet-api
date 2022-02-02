import { Router } from 'express'

// import * as balanceRouter from '../controllers/balanceRouter.js'

import authMiddleware from '../middlewares/authMiddleware.js'


const router = new Router()

router.use(authMiddleware)

// router.get('', balanceRouter.getBalance)


export default router
