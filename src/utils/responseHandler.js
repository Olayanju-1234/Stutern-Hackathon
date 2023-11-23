const SuccessResponse = (res, data, message) => {
    return res.status(200).json({
        success: true,
        message,
        data,
    });
};

const ErrorResponse = (res, message, statusCode) => {
    return res.status(statusCode).json({
        success: false,
        message,
    });
};

export {
    SuccessResponse,
    ErrorResponse,
};
