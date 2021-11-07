module.exports = function buildMakeCreatedOn(DateApi) {
  return function makeCreatedOn(existingCreatedOn) {
    return existingCreatedOn
      ? {value: existingCreatedOn}
      : {value: DateApi.now().toISOString()};
  };
};
