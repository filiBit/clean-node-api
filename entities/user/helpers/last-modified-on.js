module.exports = function buildMakeLastModifiedOn(DateApi) {
  return function makeLastModifiedOn(existingCreatedOn) {
    return existingCreatedOn
      ? {value: DateApi.now().toISOString()}
      : {value: null};
  };
};
