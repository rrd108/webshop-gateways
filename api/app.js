const express = require('express')
const path = require('path')
const cors = require('cors')
const fs = require('fs')
const app = express()
const PORT = process.env.PORT || 5000

let gateways = require('./gateways.json')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './', 'gateways.json'))
})

app.put('/', (req, res) => {
  let gateway = (gateways.find(gateway => gateway.name == req.body.gateway))
  gateway.stars[req.body.rating - 1]++
  fs.writeFile('./gateways.json', JSON.stringify(gateways), (err) => console.error(err))
  res.json({ msg: 'Rating saved'})
})


app.listen(PORT, () => {
  console.log('Server running')
})