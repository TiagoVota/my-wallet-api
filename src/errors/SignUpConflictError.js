class SignUpConflictError extends Error {
	constructor(message) {
		super(message)
		this.name = 'SignUpConflictError'
		this.message = `'${message}' is already registered!`
		this.status = 409
	}
}


export default SignUpConflictError
