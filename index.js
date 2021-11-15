const {host, port} = require('./config.json')

const buildDataAccess = require('./data-access')
const buildEntities = require('./entities')
const buildUseCases = require('./use-cases')
const buildControllers = require('./controllers')
const buildRouter = require('./router')
const buildServer = require('./server')

global.__baseDirPath = __dirname

console.log('Build started.')
const dataAccess = buildDataAccess()
const entities = buildEntities()
const useCases = buildUseCases(dataAccess, entities)
const controllers = buildControllers(useCases)
const router = buildRouter(controllers)
const server = buildServer(router, host, port)
console.log('Build complete.')

console.log('Starting server...')
server.start()
