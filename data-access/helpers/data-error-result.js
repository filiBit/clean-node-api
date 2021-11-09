module.exports = function makeDataErrorResult(error) {
    switch (error.code) {
    case 'ENOENT':
        return {
            isError: true,
            reason: 'File doesn\'t exist.'
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
