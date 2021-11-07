module.exports = function buildMakeDataResult(
    makeDataErrorResult,
    makeDataSuccessResult
) {
    return async function makeDataResult(promiseOperation) {
        const [error, value] = await promiseOperation

        if (error) return makeDataErrorResult(error)
    
        return makeDataSuccessResult(value)
    }
}
