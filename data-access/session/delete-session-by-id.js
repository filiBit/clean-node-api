module.exports = function buildDeleteSessionById(sessionStore) {
    return function deleteSessionById(sessionId) {
        const index = sessionStore.findIndex(s => s.id === sessionId)
        sessionStore.splice(index, 1)
        return {isError: false}
    }
}
