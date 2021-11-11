const buildUserUseCases = require('./user')
const builldPostUseCases = require('./post')
const buildSessionUseCases = require('./session')

module.exports = function buildUseCases(entities, dataAccess) {
    console.log('Building use-cases...')
    const {userEntityTools, postEntityTools, sessionEntityTools} = entities
    const {userDataAccess, postDataAccess, sessionDataAccess} = dataAccess

    const userUseCases = buildUserUseCases(userEntityTools, userDataAccess)
    const postUseCases = builldPostUseCases({postEntityTools, postDataAccess, userUseCases})
    const sessionUseCases = buildSessionUseCases({sessionEntityTools, userEntityTools, sessionDataAccess})

    return {userUseCases, postUseCases, sessionUseCases}
}
