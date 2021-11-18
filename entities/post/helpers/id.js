module.exports = function buildMakeId(crypto) {
    return function makeId() {
        return {value: crypto.randomBytes(16).toString('hex')}
    }
}
