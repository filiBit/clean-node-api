module.exports = function buildLogout(deleteSessionById) {
    return async function logout(sessionId) {
        return deleteSessionById(sessionId)
    }
}
