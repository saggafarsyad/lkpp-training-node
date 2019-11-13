import express from 'express'
import bodyParser from 'body-parser'
import { listTodo, deleteTodo, getTodo, addTodo, updateTodo } from './handler'

// Init app
const app = express()

// Register middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Routing
app.get('/todo', listTodo) // List all To Do
app.get('/todo/:id', getTodo) // Get To Do by Id
app.post('/todo', addTodo) // Create a To Do
app.put('/todo/:id', updateTodo) // Update a To Do
app.delete('/todo/:id', deleteTodo) // Delete a To Do

// Start HTTP server
const PORT = 3000

app.listen(PORT, () => {
  console.log('Server Started at localhost:' + PORT)
  console.log('Press Ctrl+C to Stop')
})