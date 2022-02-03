import joi from 'joi'


const signUpSchema = joi.object({
	name: joi.string().min(2).max(80).required(),
	email: joi.string().min(5).max(80).email().required(),
	password: joi.string().min(5).max(80).required(),
	repeatPassword: joi.ref('password')
}).length(4)


export {
	signUpSchema,
}
