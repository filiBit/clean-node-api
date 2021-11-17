module.exports = function makeCustomRequestObject (nodeRequest) {
    const { url } = nodeRequest
    const { host } = nodeRequest.headers
    const parsedUrl = new URL(url, `http://${host}`)
    const { pathname } = parsedUrl

    nodeRequest.parsedUrl = parsedUrl
    nodeRequest.pathSegments = pathname.split('/').filter(s => s !== '')
    nodeRequest.methodName = nodeRequest.method.toLowerCase()
    nodeRequest.pathParameters = {}

    return nodeRequest
}
