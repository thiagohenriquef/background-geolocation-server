const { Pool } = require('pg')
const host = 'ec2-50-16-241-91.compute-1.amazonaws.com'
const database = 'd82p02b7pbmksv'
const user = 'lqonsvarkvyktb'
const port = '5432'
const password = '630a97c3e56adb0143e9d9d298c6ba8fd9d21c6018d5e2bf1e62d3fd8649ea67'

const connectionString = `postgresql://${user}:${password}@${host}:${port}/${database}`
const pool = new Pool({ connectionString: connectionString, ssl: true })

// const connectionString = 'postgresql://postgres:postgres@localhost:5432/geolocalizacao'
// const pool = new Pool({ connectionString })

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}