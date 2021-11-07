module.exports = function buildLoginUser(
    queryUserByName,
    makePasswordHash,
    makeTokenId
) {
    return async function loginUser(userInfo) {
        const userResult = await queryUserByName(userInfo.name)
        if (userResult.error) return userResult
        const user = userResult.value

        const loginPasswordHash = makePasswordHash(userInfo.password)

        if (loginPasswordHash !== user.passwordHash) {
            return {
                isError: true,
                reason: 'Incorrect password'
            }
        }

        var crypto = require('crypto')

        const sessionId = makeSessionId()
        const sessionIdInsertResult = insertSessionId(sessionId, userId)
        if (sessionInsertResult.isError)
            throw new Error(sessionIdInsertResult.reason)

        return {
            isError: false,
            value: sessionId
        }
    }
}
