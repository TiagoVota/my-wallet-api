import { ObjectId } from 'mongodb'

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
		objectValidation: transactionSchema.sendTransactionSchema
	})

	if (transactionErrors) throw new SchemaError(transactionErrors)

	const transaction = await transactionRepository.insertTransaction({
		...transactionInfo,
		date: Date.now()
	})

	return transaction
}


const editTransaction = async (transactionInfo) => {
	const { transactionId } = transactionInfo
	transactionInfo.transactionId = new ObjectId(transactionId)
	
	const transactionErrors = validationErrors({
		objectToValid: transactionInfo,
		objectValidation: transactionSchema.editTransactionSchema
	})

	if (transactionErrors) throw new SchemaError(transactionErrors)

	const transaction = await transactionRepository.updateTransaction({
		...transactionInfo
	})

	return transaction
}


const removeTransaction = async ({ transactionId }) => {
	transactionId = new ObjectId(transactionId)

	const transaction = await transactionRepository.deleteTransaction({ transactionId })

	return transaction
}


export {
	listTransactions,
	addTransaction,
	editTransaction,
	removeTransaction,
}
