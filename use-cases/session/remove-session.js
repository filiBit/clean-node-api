module.exports = function buildRemoveSession(deleteSessionById) {
    return async function removeSession(sessionId) {
        const sessionDeleteResult = await deleteSessionById(sessionId)
        if (sessionDeleteResult.isError) return sessionDeleteResult

        return {}
    }
}
