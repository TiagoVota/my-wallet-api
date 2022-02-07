import connection from '../database/database.js'


const findTransactionByUserId = async ({ userId }) => {
	const { mongoClient, db } = await connection()

	const transactions = await db.collection('transactions')
		.find({ userId }).toArray()
	await mongoClient.close()

	return transactions
}


const insertTransaction = async ({ value, description, date, userId }) => {
	const { mongoClient, db } = await connection()

	const body = { value, description, date, userId }

	const transaction = await db.collection('transactions').insertOne(body)
	await mongoClient.close()

	return transaction
}


const updateTransaction = async ({ value, description, transactionId }) => {
	const { mongoClient, db } = await connection()

	const transaction = await db.collection('transactions').updateOne(
		{ _id: transactionId },
		{
			$set: { value, description }
		}
	)
	await mongoClient.close()

	return transaction
}


const deleteTransaction = async ({ transactionId }) => {
	const { mongoClient, db } = await connection()

	const transaction = await db.collection('transactions').deleteOne({
		_id: transactionId
	})
	await mongoClient.close()

	return transaction
}


export {
	findTransactionByUserId,
	insertTransaction,
	updateTransaction,
	deleteTransaction,
}
