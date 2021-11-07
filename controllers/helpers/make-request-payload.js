module.exports = async function makeRequestPayload(req) {
    const buffers = []
    for await (const chunk of req) {
        payload.push(chunk)
    }

    return JSON.parse(Buffer.concat(buffers).toString())
}
