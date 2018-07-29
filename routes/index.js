const app = require('express')()

const load = path => require(`./${path}`)

app.use('/geolocalizacao', load('geolocalizacao'))

module.exports = app