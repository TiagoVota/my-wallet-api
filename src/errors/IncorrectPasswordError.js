class IncorrectPasswordError extends Error {
	constructor(message) {
		super(message)
		this.name = 'IncorrectPasswordError'
		this.message = 'Incorrect password!'
		this.status = 401
	}
}


export default IncorrectPasswordError
