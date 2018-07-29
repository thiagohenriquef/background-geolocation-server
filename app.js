const app = require('express')()
const middleware = require('./utils/middleware')
const routes = require('./routes/index')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Loading middleware...
app.use(middleware)

// Loading Routes
app.use(routes)

app.use('/', (req, res) => {
  res.send('Basic API!!!')
})

module.exports = app
