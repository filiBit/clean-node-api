module.exports = function makeAuthorName(authorNameInfo) {
    if (typeof authorNameInfo != 'string') {
        return {
            isError: true,
            reason: 'Invalid author type.'
        }
    }

    return {
        isError: false,
        value: authorNameInfo
    }
}
