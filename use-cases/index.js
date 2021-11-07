const buildUserUseCases = require("./user");
const builldPostUseCases = require("./post");

module.exports = function buildUseCases(entities, dataAccess) {
  console.log("Building use-cases...");
  const {userEntityTools, makePost} = entities;
  const {userDataAccess, postDataAccess} = dataAccess;

  const userUseCases = buildUserUseCases(userEntityTools, userDataAccess);

  const postUseCases = builldPostUseCases(
    makePost,
    postDataAccess,
    userUseCases
  );

  return {userUseCases, postUseCases};
};
