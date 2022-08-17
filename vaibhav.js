const express = require('express')
const path = require('path')
const http = require('http')
const app = express()
const hostname = '127.0.0.1'
const port = 3000

app.use(express.static(path.join(__dirname,"website")))
app.get('/', (req, res) => {

})
app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`)
})