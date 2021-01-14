const asyncHandler = require('express-async-handler')

const createContactMessage = asyncHandler(async (req, res) => {
  res.json({
    message: 'Hello thanks for contacting.',
    userdata: req.body
  })
})

module.exports = {
  createContactMessage
}
