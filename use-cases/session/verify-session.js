module.exports = function buildVerifySession({querySessionById, isSessionExpired}) {
    return async function verifySession(sessionId) {
        const sessionResult = await querySessionById(sessionId)
        if (sessionResult.isError) {
            return {
                isError: true,
                reason: 'Unauthorized.'
            }
        }

        const session = sessionResult.value

        if (isSessionExpired(session)) {
            return {
                isError: true,
                reason: 'Unauthorized.'
            }
        }

        return {}
    }
}
