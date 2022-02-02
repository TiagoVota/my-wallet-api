import { Router } from 'express'

// import * as authController from '../controllers/authController.js'

import authMiddleware from '../middlewares/authMiddleware.js'


const router = new Router()

// router.post('/login', authController.login)
// router.post('/signUp', authController.signUp)
// router.post('/logout', authMiddleware, authController.logout)


export default router
