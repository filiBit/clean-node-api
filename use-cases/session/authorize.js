module.exports = function buildAuthorize({querySessionById, isSessionExpired}) {
    return async function authorize(sessionId, validator) {
        if (sessionId == null || sessionId == '') {
            return {isError: true}
        }

        const sessionResult = await querySessionById(sessionId)
        if (sessionResult.isError || sessionResult.value == null) {
            return {
                isError: true,
                reason: 'Unauthorized.'
            }
        }
        const session = sessionResult.value

        if (validator && validator(session) == false) {
            return {
                isError: true,
                reason: 'Unauthorized.'
            }
        }

        if (isSessionExpired(session)) {
            return {
                isError: true,
                reason: 'Unauthorized.'
            }
        }

        return {}
    }
}
