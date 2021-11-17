module.exports = function buildDeleteSessionById(sessionStore) {
    return function deleteSessionById(sessionId) {
        const index = sessionStore.findIndex(s => s.id === sessionId)

        if (index === -1) {
            return {
                isError: false,
                value: null,
            }
        }

        const deletedSession = sessionStore[index]
        sessionStore[index].splice(index, 1)

        return {isError: false, value: deletedSession}
    }
}
