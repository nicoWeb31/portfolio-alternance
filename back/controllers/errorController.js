const errorHandler = (err, req, res,next) =>{

    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        messages: err.message
    })
}



export {errorHandler}