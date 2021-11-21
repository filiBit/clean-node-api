module.exports = function buildLogin({
    queryUserByName,
    makePasswordHash,
    makeSession,
    insertSession
}) {
    return async function login(userInfo) {
        if (userInfo == null || userInfo.name == '') {
            return {
                isError: true,
                reason: 'Invalid user\'s name.'
            }
        }

        const userResult = await queryUserByName(userInfo.name)
        if (userResult.isError || userResult.value == null) {
            return {
                isError: true,
                reason: 'Invalid user\'s name.'
            }
        }
        const user = userResult.value

        const inputPasswordHashResult = makePasswordHash(userInfo.password)
        if (inputPasswordHashResult.isError) {
            return {
                isError: true,
                reason: 'Invalid user\'s password.'
            }
        }
        const inputPasswordHash = inputPasswordHashResult.value

        const {name, passwordHash} = user

        if (passwordHash !== inputPasswordHash) {
            return {
                isError: true,
                reason: 'Invalid user\'s name or password.'
            }
        }

        const sessionResult = makeSession(name)
        const session = sessionResult.value
        await insertSession(session)

        return {
            value: session
        }

    }
}
