const express = require('express')
const contactRouter = require('./routers/contactRouter')
const cors = require('cors')
const { errorHandler } = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use('/contact', cors(), contactRouter)
app.use(errorHandler)
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`)
})
