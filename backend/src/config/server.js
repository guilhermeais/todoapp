const PORT = 3003

import bodyParser from 'body-parser'
import express from 'express'

const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export default server