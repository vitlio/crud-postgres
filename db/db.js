const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    port: '5432',
    database: 'mydb'
})

module.exports = pool