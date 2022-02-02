import cors from 'cors'
import express from 'express'

import healthRouter from './routers/healthRouter.js'
import authRouter from './routers/authRouter.js'
import movementRouter from './routers/movementRouter.js'
import balanceRouter from './routers/balanceRouter.js'

import backMiddlewareError from './middlewares/backMiddlewareError.js'
import serverMiddlewareError from './middlewares/serverMiddlewareError.js'


const app = express()

app.use(cors())
app.use(express.json())

app.use('/health', healthRouter)
app.use('/auth', authRouter)
app.use('/movement', movementRouter)
app.use('/balance', balanceRouter)

app.use(backMiddlewareError)
app.use(serverMiddlewareError)


export default app
