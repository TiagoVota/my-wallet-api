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


const login = async (req, res, next) => {
	const { body: loginInfo } = req

	try {
		const user = await authService.loginUser(loginInfo)
		
		return res.status(200).send(user)

	} catch (error) {		
		next(error)
	}
}


const logout = async (req, res, next) => {
	const { locals: { userId } } = res

	try {
		const sessions = await authService.logoutUser({ userId })
		
		return res.status(200).send(sessions)

	} catch (error) {		
		next(error)
	}
}


export {
	login,
	signUp,
	logout,
}
