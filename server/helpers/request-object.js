module.exports = function makeCustomRequestObject (nodeRequest) {
    const { url } = nodeRequest
    const { host } = nodeRequest.headers
    const parsedUrl = new URL(url, `http://${host}`)
    const { pathname } = parsedUrl

    return {
        ...nodeRequest,
        parsedUrl: parsedUrl,
        pathSegments: pathname.split('/').filter(s => s !== ''),
        methodName: nodeRequest.method.toLowerCase(),
        pathParameters: {}
    }
}
