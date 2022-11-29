exports.success =  (req, res, status, message) => {
    const statusCode = status || 200;

    res.status(statusCode).send({
        error: false,
        status: statusCode,
        data: message || 0,
    });
}

exports.error = (req, res, status, message) => {
    const statusCode = status || 500;
    const statusMessage = message || 'Internal server error';

    res.status(statusCode).send({
        error: true,
        status: status,
        data: statusMessage,
    });
}