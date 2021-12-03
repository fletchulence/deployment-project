require('dotenv').config()
const express = require('express')

const server = express()

server.get('/api/users', (req, res) =>{
   res.json([
      {id: 1, username: 'brow'},
      {id: 2, username: 'ear'},
      {id: 3, username: 'nose'},
   ]);
})

// const port = 9000 //! heroku doesnt like this one
const PORT = process.env.PORT || 8080

server.listen(PORT, ()=>{
   console.log(`listening on ${PORT}`)
})