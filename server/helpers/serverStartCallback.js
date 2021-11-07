module.exports = function makeServerStartCallback(port) {
  return function serverStartCallback() {
    console.log(`Server is listening on port ${port}`);
  };
};
