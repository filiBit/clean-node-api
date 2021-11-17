module.exports = function buildPatchUserMethod(makeRequestPayload, editUser) {
    return async function patchUserMethod(req, res) {
        const {name} = req.pathParameters

        const userInfoResult = await makeRequestPayload(req)
        if (userInfoResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(userInfoResult))
            res.end()
            return
        }
        const userInfo = userInfoResult.value

        const userEditResult = await editUser(name, userInfo)
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
