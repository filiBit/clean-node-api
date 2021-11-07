const makeName = require('./helpers/name')
const buildMakePasswordHash = require('./helpers/password-hash')
const buildMakeCreatedOn = require('./helpers/created-on')
const buildMakeLastModofiedOn = require('./helpers/last-modified-on')
const makePosts = require('./helpers/posts')
const buildMakeUser = require('./user.js')

module.exports = function buildUserEntityTools(crypto, DateApi) {
    const makePasswordHash = buildMakePasswordHash(crypto)
    const makeCreatedOn = buildMakeCreatedOn(DateApi)
    const makeLastModifiexOn = buildMakeLastModifiedOn(DateApi)

    const makeUser = buildMakeUser({
        makeName,
        makePasswordHash,
        makeCreatedOn,
        makeLastModofiedOn,
        makePosts
    })

    return {
        makeUser,
        helpers: {
            makeName,
            makePasswordHash,
            makeCreatedOn,
            makeLastModofiedOn,
            makePosts
        }
    }
}
