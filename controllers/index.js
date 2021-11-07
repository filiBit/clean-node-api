const buildUsersController = require("./users");

module.exports = function buildControllers(useCases) {
  console.log("Building Controllers...");
  const usersController = buildUsersController(useCases.userUseCases);
  return {
    methods: {
      getMethod(req, res) {
        res.statusCode = 200;
        res.end();
      }
    },
    controllers: {
      users: usersController
    }
  };
};
