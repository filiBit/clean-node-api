const buildInsertSession = require('./insert-session.js')
const buildQueryAllSessions = require('./query-all-sessions.js')
const buildQuerySessionById = require('./query-session-by-id.js')
const buildDeleteSession = require('./delete-session.js')

module.exports = function buildSessionDataAccess() {
    const sessionStore = []

    const insertSession = buildInsertSession(sessionStore)
    const queryAllSessions = buildQueryAllSessions(sessionStore)
    const querySessionById = buildQuerySessionById(sessionStore)
    const deleteSession = buildDeleteSession(sessionStore)

    return {
        insertSession,
        queryAllSessions,
        querySessionById,
        deleteSession
    }
}
