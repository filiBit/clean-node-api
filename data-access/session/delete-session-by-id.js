module.exports = function buildDeleteSessionById(sessionStore) {
    return function deleteSessionById(sessionId) {
        const index = sessionStore.findIndex(s => s.id === sessionId)

        console.log(index)

        if (index === -1) {
            return {
                isError: false,
                value: null
            }
        }

        const deletedSession = sessionStore[index]
        sessionStore.splice(index, 1)

        return {isError: false, value: deletedSession}
    }
}
