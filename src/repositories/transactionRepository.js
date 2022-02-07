import connection from '../database/database.js'


const findTransactionByUserId = async ({ userId }) => {
	const { mongoClient, db } = await connection()

	const transactions = await db.collection('transactions')
		.find({ userId }).toArray()
	await mongoClient.close()

	return transactions
}


const insertTransaction = async ({ value, description, userId }) => {
	const { mongoClient, db } = await connection()

	const body = { value, description, userId }

	const transactions = await db.collection('transactions').insertOne(body)
	await mongoClient.close()

	return transactions
}


export {
	findTransactionByUserId,
	insertTransaction,
}
