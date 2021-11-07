module.exports = function buildQueryAllSessions(sessionStore) {
    return function queryAllSessions(id) {
        const session = sessionStore.find(s => s.id === id)
        return {isError: false, value: session}
    }
}
