module.exports = function buildmakePasswordHash(crypto) {
    return function makePasswordHash(password) {
        if (typeof password != 'string') {
            return {
                isError: true,
                reason: 'Password must be a string'
            }
        }

        const hash = crypto.createHash('sha256')
        hash.update(password)
        const passwordHash = hash.digest('hex')

        return {value: passwordHash}
    }
}
