const buildUserUseCases = require('./user')
const builldPostUseCases = require('./post')
const buildSessionUseCases = require('./session')

module.exports = function buildUseCases(dataAccess, entities) {
    console.log('Building use-cases...')
    const {userEntityTools, postEntityTools, sessionEntityTools} = entities
    const {userDataAccess, postDataAccess, sessionDataAccess} = dataAccess

    const userUseCases = buildUserUseCases(userEntityTools, userDataAccess)
    const postUseCases = builldPostUseCases({postEntityTools, postDataAccess, userDataAccess})
    const sessionUseCases = buildSessionUseCases({sessionEntityTools, sessionDataAccess, userEntityTools, userDataAccess})

    return {userUseCases, postUseCases, sessionUseCases}
}
