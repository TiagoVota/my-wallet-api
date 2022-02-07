import * as transactionService from '../services/transactionService.js'


const getTransactions = async (req, res, next) => {
	const { locals: { userId } } = res

	try {
		const transactions = await transactionService.listTransactions({ userId })
		
		return res.status(200).send(transactions)

	} catch (error) {		
		next(error)
	}
}


const sendTransaction = async (req, res, next) => {
	const { body: transactionInfo } = req
	const { locals: { userId } } = res

	try {
		const transaction = await transactionService.addTransaction({
			...transactionInfo,
			userId
		})
		
		return res.status(201).send(transaction)

	} catch (error) {		
		next(error)
	}
}


const updateTransaction = async (req, res, next) => {
	const {
		body: transactionInfo,
		params: { transactionId },
	} = req

	try {
		const transaction = await transactionService.editTransaction({
			...transactionInfo,
			transactionId
		})
		
		return res.status(200).send(transaction)

	} catch (error) {		
		next(error)
	}
}


const eraseTransaction = async (req, res, next) => {
	const { params: { transactionId }	} = req

	try {
		const transaction = await transactionService.removeTransaction({ transactionId })
		
		return res.status(200).send(transaction)

	} catch (error) {		
		next(error)
	}
}


export {
	getTransactions,
	sendTransaction,
	updateTransaction,
	eraseTransaction,
}
