const buildGetUserByNameMethod = require("get-user-by-name-method");
const buildPutUserMethod = require("put-user-method");
const buildDeleteUserByNameMethod = require("delete-user-by-name-method");

module.exports = function buildIndividualUserController({
  queryUserByName,
  modifyUser,
  deleteUserByName
}) {
  const getUserByNameMethod = buildGetUserByNameMethod(queryUserByName);
  const putUserMethod = buildPutUserMethod(modifyUser);
  const deleteUserByNameMethod = buildDeleteUserByNameMethod(deleteUserByName);

  return {
    methods: {
      getMethod: getUserByNameMethod,
      putMethod: putUserMethod,
      deleteMethod: deleteUserByNameMethod
    }
  };
};
