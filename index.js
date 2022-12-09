const express = require('express')
const app = express()
const port = 3000
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())


app.get('/', (req, res) => {
  res.send('Hello World!aaaa')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})