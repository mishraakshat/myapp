// const {Client} = require('pg')

// const client = new Client({
//     host:'localhost',
//     user:'postgres',
//     port:5432,
//     password:'rootUser',
//     database:'postgres'
// })

// client.connect()

// client.query(`select * from users`, (err, res) => {
//     if(!err) console.log(res.rows)
//     else console.log(err)
//     client.end
// })
const { Client } = require('pg')
const client = new Client()
client.connect()
client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end()
})