const path = require("path");
const fs = require("fs/promises");

const buildMakeDirIfMissing = require("./helpers/make-dir-if-missing.js");
const buildMakeDataResult = require("./helpers/data-result.js");
const makeDataErrorResult = require("./helpers/data-error-result.js");
const makeDataSuccessResult = require("./helpers/data-success-result.js");

const buildUserDataAccess = require("./users");
const buildPostDataAccess = require("./posts");
const buildSessionDataAccess = require("./session");

module.exports = function buildDataAccess() {
  console.log("Building data access...");

  const makeDirIfMissing = buildMakeDirIfMissing(path);
  const dataDirPath = makeDirIfMissing(__baseDirPath, ".data");
  const makeDataResult = buildMakeDataResult(
    makeDataErrorResult,
    makeDataSuccessResult
  );

  const userDataAccess = buildUserDataAccess({
    path,
    fs,
    makeDirIfMissing,
    makeDataResult,
    dataDirPath
  });

  const postDataAccess = buildPostDataAccess({
    path,
    fs,
    makeDirIfMissing,
    makeDataResult,
    dataDirPath
  });

  const sessionDataAccess = buildSessionDataAccess();

  return {
    userDataAccess,
    postDataAccess,
    sessionDataAccess
  };
};
