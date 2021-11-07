module.exports = function buildRootRequestHandler(router) {
    return function makeRootRequestObject(makeRequestObject, makeResponseObject) {
        return function rootRequestHandler(nodeRequestObject, nodeResponseObject) {
            const requestObject = makeRequestObject(nodeRequestObject)
            const responseObject = makeResponseObject(nodeResponseObject)
            router(requestObject, responseObject)
        }
    }
}
