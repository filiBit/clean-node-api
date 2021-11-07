module.exports = function buildDeleteSession(sessionStore) {
  return function deleteSession(sessionId) {
    const index = sessionStore.findIndex(s => s.id === sessionId);
    sessionStore.splice(index, 1);
    return {isError: false};
  };
};
