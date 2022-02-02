import * as sessionService from '../services/sessionService.js'


const authMiddleware = async (req, res, next) => {
	const { headers: { authorization } } = req
	const token = authorization?.replace('Bearer ', '')
	console.log({ authorization, token })

	try {
		const userId = await sessionService.authUser({ token })
	
		req.headers.userId = userId
		
		next()
		
	} catch (error) {
		next(error)
	}
}


export default authMiddleware
