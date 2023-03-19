class Response {
    constructor(statusCode, httpStatus, message, data) {
        this.timeStamp = new Date().toISOString()
        this.statusCode = statusCode
        this.httpStatus = httpStatus
        this.message = message
        this.data = data
    }
}

export default Response
