const express = require('express')

const app = express()

// Express body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.use('/users', require('./routes/users.js'))
app.use('/loans', require('./routes/loans.js'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${PORT}`))
