require('dotenv').config()
const express = require('express')
const {SERVER_PORT} = process.env
const ctrl = require('./controller')
const app = express()

app.use(express.json())
app.post('/api/jokes', ctrl.keep)
app.get('/api/jokes', ctrl.getBestJokes)
app.put('/api/jokes/:id', ctrl.name)
app.delete('/api/jokes/:id', ctrl.trash)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} best darn jokes ya heard`))