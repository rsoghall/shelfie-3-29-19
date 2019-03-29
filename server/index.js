const express = require('express')
const controller = require('./controller')
const massive = require('massive')
require('dotenv').config()
const ctrl = require('./controller')
const app = express()
const{SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        console.log('DB Set!')
        console.log(db.listTables(db))
    app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`))
    })

    const url = '/api/products'
    app.get('/api/products', ctrl.read)
    app.post('/api/products', ctrl.create)