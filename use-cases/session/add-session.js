module.exports = function buildAddSession({
    queryUserByName,
    makePasswordHash,
    makeSession,
    insertSession
}) {
    return async function addSession(userInfo) {
        const userResult = await queryUserByName(userInfo.name)
        if (userResult.isError) {
            return {
                isError: true,
                reason: 'Invalid user\'s name or password.'
            }
        }

        const inputPasswordHashResult = makePasswordHash(userInfo.password)
        if (inputPasswordHashResult.isError) {
            return {
                isError: true,
                reason: 'Invalid user\'s name or password.'
            }
        }

        const {name: userName, passwordHash} = userResult.value
        const inputPasswordHash = inputPasswordHashResult.value

        if (passwordHash !== inputPasswordHash) {
            return {
                isError: true,
                reason: 'Invalid user\'s name or password.'
            }
        }

        const session = makeSession(userName)
        await insertSession(session)
        const sessionId = session.id

        return {
            value: sessionId
        }

    }
}
