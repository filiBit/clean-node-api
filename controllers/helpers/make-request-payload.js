module.exports = async function makeRequestPayload(req) {
    const buffers = []
    for await (const chunk of req) {
        buffers.push(chunk)
    }

    const stringPayload = Buffer.concat(buffers).toString()

    let jsonPayload
    try {
        jsonPayload = JSON.parse(stringPayload)
    }
    catch (ex) {
        return {
            isError: true,
            reason: 'Request payload has an invalid JSON format.'
        }
    }

    return {value: jsonPayload}
}
