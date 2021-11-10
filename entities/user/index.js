const makeName = require('./helpers/name')
const makePassword = require('./helpers/password')
const buildMakePasswordHash = require('./helpers/password-hash')
const makeCreatedOn = require('./helpers/created-on')
const makeLastModifiedOn = require('./helpers/last-modified-on')
const makePosts = require('./helpers/posts')
const buildMakeUser = require('./user.js')

module.exports = function buildUserEntityTools(crypto) {
    const makePasswordHash = buildMakePasswordHash(crypto)

    const makeUser = buildMakeUser({
        makeName,
        makePassword,
        makePasswordHash,
        makeCreatedOn,
        makeLastModifiedOn,
        makePosts
    })

    return {
        makeUser,
        helpers: {
            makeName,
            makePasswordHash,
            makeCreatedOn,
            makeLastModifiedOn,
            makePosts
        }
    }
}
