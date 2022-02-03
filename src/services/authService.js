import bcrypt from 'bcrypt'

import * as authRepository from '../repositories/authRepository.js'
import * as authValidation from '../validations/authValidation.js'

import { validationErrors } from '../validations/handleValidation.js'

import SchemaError from '../errors/SchemaError.js'
import SignUpConflictError from '../errors/SignUpConflictError.js'


const createUser = async (signUpInfo) => {
	const signUpErrors = validationErrors({
		objectToValid: signUpInfo,
		objectValidation: authValidation.signUpSchema
	})

	if (signUpErrors) throw new SchemaError(signUpErrors)
	const { email, password } = signUpInfo

	const existentUser = await authRepository.findUserByEmail({ email })
	console.log({ existentUser })

	if (existentUser) throw new SignUpConflictError(email)

	const hashPassword = bcrypt.hashSync(password, 12)

	const user = await authRepository.insertUser({
		...signUpInfo,
		password: hashPassword
	})
	
	return user
}



export {
	createUser,
}
