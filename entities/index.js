const crypto = require('crypto')

const buildUserEntityTools = require('./user')
const buildPostEntityTools = require('./post')
const buildSessionEntityTools = require('./session')

module.exports = function buildEntities() {
    console.log('Building entities...')

    const SECONDS_IN_24_HOURS = 24 * 60 * 60

    const userEntityTools = buildUserEntityTools(crypto)
    const postEntityTools = buildPostEntityTools()
    const sessionEntityTools = buildSessionEntityTools(crypto, SECONDS_IN_24_HOURS)

    return {userEntityTools, postEntityTools, sessionEntityTools}
}
