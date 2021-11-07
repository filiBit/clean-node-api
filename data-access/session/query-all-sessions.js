module.exports = function buildQueryAllSessions(sessionStore) {
  return function queryAllSessions() {
    return {isError: false, value: sessionStore};
  };
};
