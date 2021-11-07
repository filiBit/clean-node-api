module.exports = function makeDataSuccessResult(data) {
  return {
    isError: false,
    value: data
  };
};
