import connection from '../database/database.js'


const insertSession = async ({ userId, token }) => {
	const { mongoClient, db } = await connection()

	const session = await db.collection('sessions').insertOne({ userId, token })
	mongoClient.close()
	
	return session
}


const findSessionByToken = async ({ token }) => {
	const { mongoClient, db } = await connection()

	const session = await db.collection('sessions').findOne({ token })
	mongoClient.close()
	
	if (!session) return null
	return session
}


const deleteSessionsByUserId = async ({ userId }) => {
	const { mongoClient, db } = await connection()

	const sessions = await db.collection('sessions').deleteMany({ userId })
	mongoClient.close()

	return sessions
}


export {
	insertSession,
	findSessionByToken,
	deleteSessionsByUserId,
}
