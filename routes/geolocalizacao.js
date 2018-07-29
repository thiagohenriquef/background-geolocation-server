const db = require('../db')
const router = require('express').Router()
const errorCallback = err => res.status(500).send(err)

router.get('/', (req, res) => {
  db.query('select * from geolocalizacao')
    .then(({ rows }) => res.status(200).json(rows))
    .catch(errorCallback)
})

router.post('/', (req, res) => {
  console.log('------------------------------------')
  console.log(req.body)
  // db.query('insert into geolocalizacao(latitude, longitude) values ($1, false) RETURNING id', [req.body.texto])
    // .then(({ rows }) => res.status(200).json(rows[0].id))
    // .catch(errorCallback)
})

module.exports = router
