const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './', 'gateways.json'))
})

app.listen(PORT, () => {
  console.log('Server running')
})