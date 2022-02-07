import joi from 'joi'


const sendTransactionSchema = joi.object({
	value: joi.number().precision(2).min(-999999999).max(999999999).required(),
	description: joi.string().min(2).max(80).required(),
	userId: joi.object(),
}).length(3)

const editTransactionSchema = joi.object({
	value: joi.number().precision(2).min(-999999999).max(999999999).required(),
	description: joi.string().min(2).max(80).required(),
	transactionId: joi.object(),
}).length(3)


export {
	sendTransactionSchema,
	editTransactionSchema,
}
