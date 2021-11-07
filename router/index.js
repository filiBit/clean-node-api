const buildSelectController = require('./helpers/selectController')
const buildSelectMethod = require('./helpers/selectMethod')

module.exports = function buildRouter(controllers) {
    console.log('Building router...')
    const selectController = buildSelectController(controllers)
    const selectMethod = buildSelectMethod(selectController)

    return function router(req, res) {
        const {pathSegments, methodName} = req
        const selectedMethod = selectMethod(pathSegments, methodName)
        if (!selectedMethod) {
            res.statusCode = 404
            res.end()
            return
        }
        selectedMethod(req, res)
    }
}
