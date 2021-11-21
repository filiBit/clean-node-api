module.exports = function buildRootRequestHandler(router, makeRequestObject, makeResponseObject) {
    return async function rootRequestHandler(nodeRequestObject, nodeResponseObject) {
        const requestObject = makeRequestObject(nodeRequestObject)
        const responseObject = makeResponseObject(nodeResponseObject)
        try {
            console.log(`${requestObject.methodName.toUpperCase()} ${requestObject.url}`)
            await router(requestObject, responseObject)
        } catch(exception) {
            console.warn('Root Request Handler caught an excepetion:')
            console.error(exception)
            responseObject.removeHeader('Content-Type')
            responseObject.statusCode = 500
            responseObject.end()
            console.warn('Root Request Handler sent status code 500.')
        }
    }
}
