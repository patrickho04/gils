class WebError extends Error{
    constructor(status, message) {
        super();
        this.message = message;
        this.status = status;
    }
}

module.exports = WebError;