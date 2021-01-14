/* 
  All errors go to errorHandler (middleware handler with four params is considered error handler in express)
*/
const errorHandler = (err, req, res, next) => {
  const status = req.status === 200 ? 500 : req.status
  res.status(status)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  })
}

module.exports = {
  errorHandler
}
