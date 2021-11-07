module.exports = function makeDataErrorResult(error) {
    switch (error) {
    case 'ENOENT':
        return {
            isError: false,
            value: null
        }
    case 'EEXIST':
        return {
            isError: true,
            reason: 'File already exists.'
        }
    default:
        return {
            isError: true
        }
    }
}
