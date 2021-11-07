module.exports = function makeAuthor(authorInfo) {
  if (typeof author != "string") {
    return {
      isError: true,
      reason: "Invalid author type."
    };
  }

  return {
    isError: false,
    value: authorInfo
  };
};
