module.exports = function makeTextContent(textContentInfo) {
    if (typeof textContentInfo != 'string') {
        return {
            isError: true,
            reason: 'Text content must be of string type.'
        }
    }

    if (textContentInfo.length == 0) {
        return {
            isError: true,
            reason: 'Text content can\'t be empty'
        }
    }

    if (textContentInfo.length > 1000) {
        return {
            isError: true,
            reason: 'Text content must not be longer than 1000 characters.'
        }
    }

    return {value: textContentInfo}
}
