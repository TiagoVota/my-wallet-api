import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid'

import * as authRepository from '../repositories/authRepository.js'
import * as sessionRepository from '../repositories/sessionRepository.js'
import * as authSchema from '../schemas/authSchema.js'

import { validationErrors } from '../validations/handleValidation.js'

import SchemaError from '../errors/SchemaError.js'
import SignUpConflictError from '../errors/SignUpConflictError.js'
import NoFoundUserError from '../errors/NoFoundUserError.js'
import IncorrectPasswordError from '../errors/IncorrectPasswordError.js'


const createUser = async (signUpInfo) => {
	const signUpErrors = validationErrors({
		objectToValid: signUpInfo,
		objectValidation: authSchema.signUpSchema
	})

	if (signUpErrors) throw new SchemaError(signUpErrors)
	const { email, password } = signUpInfo

	const registeredUser = await authRepository.findUserByEmail({ email })

	if (registeredUser) throw new SignUpConflictError(email)

	const hashPassword = bcrypt.hashSync(password, 12)

	const user = await authRepository.insertUser({
		...signUpInfo,
		password: hashPassword
	})
	
	return user
}


const loginUser = async (loginInfo) => {
	const loginErrors = validationErrors({
		objectToValid: loginInfo,
		objectValidation: authSchema.loginSchema
	})

	if (loginErrors) throw new SchemaError(loginErrors)
	const { email, password } = loginInfo

	const registeredUser = await authRepository.findUserByEmail({ email })
	
	if (!registeredUser) throw new NoFoundUserError(email)
	const { _id: userId, password: hashedPassword, name } = registeredUser

	const isValidLogin = bcrypt.compareSync(password, hashedPassword)

	if (!isValidLogin) throw new IncorrectPasswordError()

	const token = uuid()

	const session = await sessionRepository.insertSession({ userId, token })
	
	return { ...session, name, token }
}


export {
	createUser,
	loginUser,
}
