module.exports = function buildSelectMethod(selectController) {
    return function selectMethod(req) {
        const {methodName} = req
        const selectedController = selectController(req)
        return selectedController.methods[methodName + 'Method']
    }
}
