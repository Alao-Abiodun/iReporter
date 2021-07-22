const errorHandler = (req, res, err) => {
    // user customized error code
    if (err.statusCode) {
        res.status(statusCode).json({
            status: 'error',
            error: err.message,
            data: err.data,
        })
        // error generate by the code
    } else if (err.status) {
        res.status(status).json({
            status: 'error',
            error: err.message,
            data: []
        })
    } else {
        // error generate by the server
        res.status(500).json({
            status: 'error',
            error: 'Internal Server Error',
            data: []
        })
    }
}

module.exports = errorHandler;