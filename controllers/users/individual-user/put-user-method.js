module.exports = function buildPutUserdMethod(modifyUserBy) {
    return async function putUserMethod(req, res) {
        const {name} = req.pathParams

        const userInfo = await makeRequestPayload(req)

        const userModifyResult = await modifyUser(userInfo)
        if (userModifyResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(userModifyResult))
            res.end()
            return
        }

        if (userModifyResult.value == null) {
            res.statusCode = 404
            res.end()
        }

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(userModifyResult.value))
        res.end()
    }
}
