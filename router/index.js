const buildSelectController = require('./helpers/selectController')
const buildSelectMethod = require('./helpers/selectMethod')

module.exports = function buildRouter(controllers) {
    console.log('Building router...')
    const selectController = buildSelectController(controllers)
    const selectMethod = buildSelectMethod(selectController)

    return async function router(req, res) {
        const selectedMethod = selectMethod(req)
        if (!selectedMethod) {
            res.statusCode = 404
            res.end()
            return
        }
        await selectedMethod(req, res)
    }
}
