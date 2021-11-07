const crypto = require('crypto')

const buildMakeUser = require('./user')
const buildMakePost = require('./post')

module.exports = function buildEntities() {
    console.log('Building entities...')
    userEntityTools = buildUserEntityTools(crypto, Date)
    makePost = buildMakePost(Date)

    return {userEntityTools, makePost}
}
