module.exports = function buildPostUserMethod(makeRequestPayload, addUser) {
    return async function postUserMethod(req, res) {

        const userInfoResult = await makeRequestPayload(req)
        if (userInfoResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(userInfoResult))
            res.end()
            return
        }
        const userInfo = userInfoResult.value

        const addUserResult = await addUser(userInfo)
        if (addUserResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(addUserResult))
            res.end()
            return
        }
        const addedUser = addUserResult.value

        res.statusCode = 201
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(addedUser))
        res.end()
    }
}
