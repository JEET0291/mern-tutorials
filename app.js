// THIS IS A FACEBOOK BRANCH //


// this is my day 1 work //

// this is my day 2 work //
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello-deepak', (req, res) => {
    res.send('Hello Deepak!')
})

app.get('/hello-pawan', (req, res) => {
    res.send('Hello Pawan!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})