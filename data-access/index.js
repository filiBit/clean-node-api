const path = require('path')
const fs = require('fs')
const fsPromises = require('fs/promises')

const buildMakeDirIfMissing = require('./helpers/make-dir-if-missing.js')
const buildMakeDataResult = require('./helpers/data-result.js')
const makeDataErrorResult = require('./helpers/data-error-result.js')
const makeDataSuccessResult = require('./helpers/data-success-result.js')

const buildUserDataAccess = require('./users')
const buildPostDataAccess = require('./posts')
const buildSessionDataAccess = require('./session')

module.exports = function buildDataAccess() {
    console.log('Building data access...')

    const makeDirIfMissing = buildMakeDirIfMissing(path, fs)
    const dataDirPath = makeDirIfMissing(global.__baseDirPath, '.data')
    const makeDataResult = buildMakeDataResult(makeDataErrorResult, makeDataSuccessResult)

    const userDataAccess = buildUserDataAccess({
        path,
        fs: fsPromises,
        makeDirIfMissing,
        makeDataResult,
        parentDirPath: dataDirPath
    })

    const postDataAccess = buildPostDataAccess({
        path,
        fs: fsPromises,
        makeDirIfMissing,
        makeDataResult,
        parentDirPath: dataDirPath
    })

    const sessionDataAccess = buildSessionDataAccess()

    return {userDataAccess, postDataAccess, sessionDataAccess}
}
