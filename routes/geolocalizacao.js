const db = require('../db')
const router = require('express').Router()
const errorCallback = err => res.status(500).send(err)

router.get('/', (req, res) => {
  db.query('select * from geolocalizacao')
    .then(({ rows }) => res.status(200).json(rows))
    .catch(errorCallback)
})

router.post('/', (req, res) => {
  if (req && req.body.length) {
    const array = [Number(req.body[0].latitude), Number(req.body[0].longitude)]

    db.query('insert into geolocalizacao(latitude, longitude) values ($1, $2) RETURNING id', array)
    .then(({ rows }) => res.status(200).json(rows[0].id))
    .catch(errorCallback)
    return
  }
  errorCallback('error on POST request on geolocalizacao')
})

module.exports = router
