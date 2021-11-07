module.exports = async function makePayload(req) {
  const buffers = [];
  for await (const chunk of req) {
    payload.push(chunk);
  }

  return Buffer.concat(buffers).toString();
};
