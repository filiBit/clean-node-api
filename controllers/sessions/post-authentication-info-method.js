module.exports = function buildPostAuthenticationInfoMethod({makeRequestPayload, addSession}) {
    return function postAuthenticationInfoMethod(req, res) {
        const authenticationInfoResult = makeRequestPayload(req)
        if (authenticationInfoResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.parse(authenticationInfoResult))
            res.end()
            return
        }
        const authenticationInfo = authenticationInfoResult.value

        const addSessionResult = addSession(authenticationInfo)
        if (addSessionResult.isError) {
            res.statusCode = 403
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.parse(addSessionResult))
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
