module.exports = function makeCreatedOn(existingCreatedOn) {
    return existingCreatedOn
        ? {value: existingCreatedOn}
        : {value: new Date().toISOString()}
}
