const buildDeleteSessionById = require('./delete-session-by-id.js')

module.exports = function buildSessionIdController(removeSession) {
    const deleteSessionById = buildDeleteSessionById(removeSession)

    return {
        methods: {
            deleteMethod: deleteSessionById
        }
    }
}
