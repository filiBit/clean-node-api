module.exports = function makePasswordHash(passwordInfo) {
    if (typeof passwordInfo != 'string') {
        return {
            isError: true,
            reason: 'Password must be a string'
        }
    }

    if (passwordInfo.length < 8) {
        return {
            isError: true,
            reason: 'Password must be 8 or more characters long.'
        }
    }
    if (passwordInfo.length > 50) {
        return {
            isError: true,
            reason: 'Password\'s maximum length is 50 characters.'
        }
    }

    return {value: passwordInfo}
}
