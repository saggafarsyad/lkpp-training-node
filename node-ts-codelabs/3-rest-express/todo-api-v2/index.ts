import express from 'express'
import bodyParser from 'body-parser'
import { initRouter } from './handler'
import { initDb } from '../todo-api-v2/db'

async function startServer() {
  // Init app
  const app = express()

  // Init db
  // TODO: Retrieve from env/process arg
  const db = await initDb()

  // Register middleware
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  // Register routing
  const router = initRouter(db)
  app.use(router)

  // Start HTTP server
  const PORT = 3000

  app.listen(PORT, () => {
    console.log('Server Started at localhost:' + PORT)
    console.log('Press Ctrl+C to Stop')
  })
}

startServer()