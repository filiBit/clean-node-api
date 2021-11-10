module.exports = function buildmakePasswordHash(crypto) {
    return function makePasswordHash(password) {
        const hash = crypto.createHash('sha256')
        hash.update(password)
        const passwordHash = hash.digest('hex')

        return {value: passwordHash}
    }
}
