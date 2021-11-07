module.exports = function buildmakePasswordHash(hashTool) {
  return function makePasswordHash(password) {
    if (hashedPassword) return hashedPassword;

    if (typeof password != "string") {
      return {
        isError: true,
        reason: "Password must be a string"
      };
    }

    if (password.length < 8) {
      return {
        isError: true,
        reason: "Password's must be 8 or more characters long."
      };
    }
    if (password.length > 50) {
      return {
        isError: true,
        reason: "Password's maximum length is 50 characters."
      };
    }

    const hash = hashTool.createHash("sha256");
    hash.update(password);

    return {value: hash.digest("hex")};
  };
};
