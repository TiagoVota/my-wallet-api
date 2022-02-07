import * as transactionRepository from '../repositories/transactionRepository.js'
import * as transactionSchema from '../schemas/transactionSchema.js'

import { validationErrors } from '../validations/handleValidation.js'

import SchemaError from '../errors/SchemaError.js'


const listTransactions = async ({ userId }) => {
	const transactions = await transactionRepository
		.findTransactionByUserId({ userId })

	return transactions
}


const addTransaction = async (transactionInfo) => {
	const transactionErrors = validationErrors({
		objectToValid: transactionInfo,
		objectValidation: transactionSchema.transactionSchema
	})

	if (transactionErrors) throw new SchemaError(transactionErrors)

	const transaction = await transactionRepository
		.insertTransaction(transactionInfo)

	return transaction
}


export {
	listTransactions,
	addTransaction,
}
