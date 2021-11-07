module.exports = function makeName(name) {
  if (typeof name != "string") {
    return {
      isError: true,
      reason: "User Name must be a string (text)."
    };
  }

  if (name.length < 5) {
    return {
      isError: true,
      reason: "User Name is too short. Valid interval is [5, 20]."
    };
  }

  if (name.length > 20) {
    return {
      isError: true,
      reason: "User Name is too long. Valid interval is [5, 20]."
    };
  }

  return {
    isError: false,
    value: name
  };
};
