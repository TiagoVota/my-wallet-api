const errorsName = [
	'AuthError',
	'SchemaError',
	'SignUpConflictError',
]

const isPersonalizedError = errorName => errorsName.includes(errorName)


export {
	isPersonalizedError,
}
