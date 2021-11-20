module.exports = function buildPostAuthenticationInfoMethod(makeRequestPayload, addSession) {
    return async function postAuthenticationInfoMethod(req, res) {
        const authenticationInfoResult = await makeRequestPayload(req)
        if (authenticationInfoResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(authenticationInfoResult))
            res.end()
            return
        }
        const authenticationInfo = authenticationInfoResult.value

        const addSessionResult = await addSession(authenticationInfo)
        if (addSessionResult.isError) {
            res.statusCode = 401
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify({isError: true, reason: 'Invalid authentication info.'}))
            res.end()
            return
        }

        const session = addSessionResult.value
        const sessionId = session.id

        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.write(sessionId)
        res.end()
    }
}
