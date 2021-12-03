require('dotenv').config()
const path = require('path')
const express = require('express')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'client/build')))

server.get('/api/users', (req, res) =>{
   res.json([
      {id: 1, username: 'brow'},
      {id: 2, username: 'ear'},
      {id: 3, username: 'nose'},
   ]);
})

server.get('*', (req, res)=>{
   res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

// const port = 9000 //! heroku doesnt like this one
const PORT = process.env.PORT || 8080

server.listen(PORT, ()=>{
   console.log(`listening on ${PORT}`)
})