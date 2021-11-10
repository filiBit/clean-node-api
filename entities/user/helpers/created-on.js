module.exports = function makeCreatedOn(existingCreatedOn) {
    return existingCreatedOn
        ? {value: existingCreatedOn}
        : {value: Date.now().toISOString()}
}
