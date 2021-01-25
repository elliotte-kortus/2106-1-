const express = require('express')
const app = express()
const port = 1510


app.get('/', (req, res) => {
  res.send({firstname: 'elliotte'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://math.seattleacademy.org:${port}`)
})
