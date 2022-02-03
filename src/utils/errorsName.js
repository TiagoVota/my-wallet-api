const errorsName = [
	'AuthError',
	'IncorrectPasswordError',
	'NoFoundUserError',
	'SchemaError',
	'SignUpConflictError',
]

const isPersonalizedError = errorName => errorsName.includes(errorName)


export {
	isPersonalizedError,
}
