module.exports = function makeServerStartCallback(host, port) {
    return function serverStartCallback() {
        console.log(`Server is listening on ${host}:${port}`)
    }
}
