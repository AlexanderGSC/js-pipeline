const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
  res.send('<h2>Commits Log</h2>')
  res.send('<p>[1]: Added a <b>CI/CD</b> pipeline:<br />Now every chage is actually commited to DockerHub and locally managed by Watchtower</p>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})