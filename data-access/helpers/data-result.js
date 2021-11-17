module.exports = function buildMakeDataResult(makeDataErrorResult, makeDataSuccessResult) {
    return function makeDataResult([error, value]) {
        if (error) return makeDataErrorResult(error)
        return makeDataSuccessResult(value)
    }
}
