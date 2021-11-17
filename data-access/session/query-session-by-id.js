module.exports = function buildQuerySessionById(sessionStore) {
    return function querySessionById(id) {
        const session = sessionStore.find(s => s.id === id)
        return {isError: false, value: session}
    }
}
