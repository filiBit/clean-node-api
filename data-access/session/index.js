const buildInsertSession = require('./insert-session.js')
const buildQueryAllSessions = require('./query-all-sessions.js')
const buildQuerySessionById = require('./query-session-by-id.js')
const buildDeleteSessionById = require('./delete-session-by-id.js')

module.exports = function buildSessionDataAccess() {
    const sessionStore = []

    const insertSession = buildInsertSession(sessionStore)
    const queryAllSessions = buildQueryAllSessions(sessionStore)
    const querySessionById = buildQuerySessionById(sessionStore)
    const deleteSessionById = buildDeleteSessionById(sessionStore)

    return {
        insertSession,
        queryAllSessions,
        querySessionById,
        deleteSessionById
    }
}
