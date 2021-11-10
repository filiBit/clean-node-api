module.exports = function makeLastModifiedOn(existingCreatedOn) {
    return existingCreatedOn
        ? {value: Date.now().toISOString()}
        : {value: null}
}
