module.exports = function makeAuthor(authorIdInfo) {
    if (typeof authorIdInfo != 'string') {
        return {
            isError: true,
            reason: 'Invalid author type.'
        }
    }

    return {
        isError: false,
        value: authorIdInfo
    }
}
