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


export {
	insertSession,
	findSessionByToken,
}
