const http = require('http')

const buildRootRequestHandler = require('./helpers/root-request-handler')
const makeCustomRequestObject = require('./helpers/request-object')
const makeCustomResponseObject = require('./helpers/response-object')
const makeServerStartCallback = require('./helpers/server-start-callback')

module.exports = function buildServer(router, host, port) {
    console.log('Building server...')
    const rootRequestHandler = buildRootRequestHandler(router, makeCustomRequestObject, makeCustomResponseObject)
    const nodeServer = http.createServer(rootRequestHandler)
    const serverStartCallback = makeServerStartCallback(host, port)

    return {
        start() {
            nodeServer.listen(port, host, serverStartCallback)
        }
    }
}
