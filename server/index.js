const http = require('http')
const buildNodeSever = require('./node-server')
const makeCustomRequestObject = require('./helpers/request-object')
const makeCustomResponseObject = require('./helpers/response-object')
const makeServerStartCallback = require('./helpers/server-start-callback')

module.exports = function buildServer(router) {
    console.log('Building server...')
    const rootRequestHandler = buildRootRequestHandler(
        router,
        makeCustomRequestObject,
        makeCustomResponseObject
    )
    const nodeServer = http.createServer(rootRequestHandler)
    const serverStartCallback = makeServerStartCallback(port)

    return {
        start() {
            nodeServer.listen(port, serverStartCallback)
        }
    }
}
