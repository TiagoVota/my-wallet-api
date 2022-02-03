import connection from '../database/database.js'


const findUserByEmail = async ({ email }) => {
	const { mongoClient, db } = await connection()

	const user = await db.collection('users').findOne({ email })
	console.log({ user })
	await mongoClient.close()

	if (!user) return null

	return user
}


const insertUser = async ({ name, email, password }) => {
	const { mongoClient, db } = await connection()
	const userInfo = {
		email,
		name,
		password
	}

	const user = await db.collection('users').insertOne(userInfo)
	await mongoClient.close()

	return user
}


export {
	findUserByEmail,
	insertUser,
}
