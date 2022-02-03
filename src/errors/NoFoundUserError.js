class NoFoundUserError extends Error {
	constructor(message) {
		super(message)
		this.name = 'NoFoundUserError'
		this.message = `'${message}' is not registered!`
		this.status = 404
	}
}


export default NoFoundUserError
