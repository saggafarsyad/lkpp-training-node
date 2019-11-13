import express from 'express'
import { helloHandler } from './handler'

// Init app
const app = express()

// Routing
app.get('/hello', helloHandler) 

// Start HTTP server
const PORT = 3000

app.listen(PORT, () => {
  console.log('Server Started at localhost:' + PORT)
  console.log('Press Ctrl+C to Stop')
})