module.exports = function buildPutUserdMethod(makeRequestPayload, editUser) {
    return async function putUserMethod(req, res) {

        const userInfoResult = await makeRequestPayload(req)
        if (userInfoResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(userInfoResult)
            res.end()
            return
        }
        const userInfo = userInfoResult.value

        const userEditResult = await editUser(userInfo)
        if (userEditResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(userEditResult))
            res.end()
            return
        }
        const editedUser = userEditResult.value

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(editedUser))
        res.end()
    }
}
