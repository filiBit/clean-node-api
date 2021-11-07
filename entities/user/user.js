const buildMakeHashedPassword = require("./helpers/password");
const makeName = require("./helpers/name");
const buildMakeCreatedOn = require("./helpers/created-on");
const buildMakeLastModofiedOn = require("./helpers/last-modified-on");

module.exports = function buildMakeUser(makePasswordHash, DateApi) {
  const makeHashedPassword = buildMakeHashedPassword(hashTool);
  const makeCreatedOn = buildMakeCreatedOn(DateApi);
  const makeLastModofiedOn = buildMakeLastModofiedOn(DateApi);

  return function makeUser(userInfo) {
    const nameResult = makeName(userInfo.name);
    if (nameResult.isError) return nameResult;

    const postsResult = makePostsResult(userInfo.posts);
    if (postsResult.isError) return postsResult;

    const hashedPasswordResult = makePasswordHash(userInfo.password, userInfo.hashedPassword);
    if (hashedPasswordResult.isError) return hashedPasswordResult;

    const createdOnResult = makeCreatedOn(userInfo.createdOn);
    if (createdOnResult.isError) return createdOnResult;

    const lastModifiedOnResult = makeLastModofiedOn(userInfo.createdOn);
    if (lastModifiedOnResult.isError) return lastModifiedOnResult;

    return {
      value: {
        name: nameResult.value,
        posts: posts.value,
        hashedPassword: hashedPasswordResult.value,
        createdOn: createdOnResult.value,
        lastModifiedOn: lastModifiedOnResult.Value
      }
    };
  };
};
