module.exports = function buildRemoveSession(deleteSessionById) {
    return async function removeSession(sessionId) {
        return deleteSessionById(sessionId)
    }
}
