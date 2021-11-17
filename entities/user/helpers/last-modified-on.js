module.exports = function makeLastModifiedOn(existingCreatedOn) {
    return existingCreatedOn
        ? {value: new Date().toISOString()}
        : {value: null}
}
