const buildGetMethod = require("./get-method");

module.exports = function buildUsersController() {
  return {
    methods: {
      getMethod: buildGetMethod()
    },
    subParameter: "id",
    controllers: {
      id: individualUserController
    }
  };
};
