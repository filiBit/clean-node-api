module.exports = function buildRootRequestHandler(router, makeRequestObject, makeResponseObject) {
    return function rootRequestHandler(nodeRequestObject, nodeResponseObject) {
        const requestObject = makeRequestObject(nodeRequestObject)
        const responseObject = makeResponseObject(nodeResponseObject)
        try {
            console.log(`${requestObject.methodName.toUpperCase()} ${requestObject.url}`)
            router(requestObject, responseObject)
        } catch(exception) {
            console.error(exception)
            responseObject.flushHeaders()
            responseObject.statusCode = 500
            responseObject.end()
        }
    }
}
