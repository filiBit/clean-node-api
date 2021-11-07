module.exports = function buildInsertSession(sessionStore) {
  return function insertSession(session) {
    sessionStore.push(session);
    return {isError: false, value: session};
  };
};
