module.exports = function buildPostUserMethod(makePayload, addUser) {
  return async function postUserMethod(req, res) {
    const payload = await makePayload(req);

    const addUserResult = await userUseCases.getAllUsers(payload);
    if (addUserResult.isError) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.write(addUserResult);
      res.end();
      return;
    }

    res.statusCode = 201;
    res.setHeader("Content-Type", "application/json");
    res.write(addUserResult.value);
    res.end();
  };
};
