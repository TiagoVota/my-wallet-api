import { Router } from 'express'

import * as transactionController from '../controllers/transactionController.js'

import authMiddleware from '../middlewares/authMiddleware.js'


const router = new Router()

router.use(authMiddleware)

router.get('', transactionController.getTransactions)

router.post('', transactionController.sendTransaction)

router.put('/:transactionId', transactionController.updateTransaction)


export default router
