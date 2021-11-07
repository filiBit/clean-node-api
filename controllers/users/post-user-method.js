module.exports = function buildPostUserMethod(makePayload, addUser) {
    return async function postUserMethod(req, res) {
        const userInfo = await makeRequestPayload(req)

        const addUserResult = await userUseCases.getAllUsers(userInfo)
        if (addUserResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(addUserResult)
            res.end()
            return
        }

        res.statusCode = 201
        res.setHeader('Content-Type', 'application/json')
        res.write(addUserResult.value)
        res.end()
    }
}
