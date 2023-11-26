const errorHandler = (err, req, res, next) => {
    const customError = {
        status: err.status || 500,
        message: err.message || 'Something went wrong',
    };

    if (err.name === 'ValidationError') {
        customError.message = err.message;
        customError.status = 400;
    }

    if (err.name === 'CastError') {
        customError.message = 'Please provide a valid id';
        customError.status = 400;
    }

    if (err.code === 11000) {
        customError.message = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please pick another value`;
        customError.status = 400;
    }


    if (err.name === 'JsonWebTokenError') {
        customError.message = 'Invalid token';
        customError.status = 400;
    }

    if (err.name === 'TokenExpiredError') {
        customError.message = 'Token expired';
        customError.status = 400;
    }

    res.status(customError.status).json({ message: customError.message });

}

export default errorHandler;