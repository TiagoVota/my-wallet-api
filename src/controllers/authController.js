import * as authService from '../services/authService.js'


const signUp = async (req, res, next) => {
	const { body: signUpInfo } = req

	try {
		const user = await authService.createUser(signUpInfo)
		
		return res.status(201).send(user)

	} catch (error) {		
		next(error)
	}
}


export {
	signUp,
}
