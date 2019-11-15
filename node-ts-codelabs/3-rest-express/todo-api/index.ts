import log from './logger'
import { initConfig } from './config'
import { initDb } from './db'
import { ToDoServiceContract, ToDoHandlerContract } from './contracts'
import { ToDoService } from './service'
import { ToDoRESTHandler } from './handler'
import express from 'express'
import bodyParser from 'body-parser'
import { confKeys } from './constants'
import { AuthMiddleware } from './middleware'

function resolveEnv(): string {
  const env = process.env.NODE_ENV
  switch (env) {
    case 'production':
    case 'staging':
    case 'development':
      return env
    default:
      return 'localdev'
  }
}

// Init config
async function boot() {
  let env = resolveEnv()
  let conf = await initConfig(env)
  let db = await initDb(conf)
  let todoService: ToDoServiceContract = new ToDoService(db)
  let authMiddleware = new AuthMiddleware(conf[confKeys.server.clientSecret])
  let todoHandlers: ToDoHandlerContract = new ToDoRESTHandler(todoService)

  // Init app
  const app = express()
  
  // Register middleware
  app.use('/assets',express.static('uploads'))
  app.use(authMiddleware.auth())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  // Register routing
  app.get('/', (req, res) => {
    res.json({
      status: 'ok'
    })
  })
  app.get('/todo', todoHandlers.list()) // List all To Do
  app.get('/todo/:id', todoHandlers.get) // List all To Do
  app.post('/todo', todoHandlers.add) // Create a To Do
  app.delete('/todo/:id', todoHandlers.delete) // Delete a To Do
  app.put('/todo/:id', todoHandlers.update) // Update a To Do

  // Get config
  let bindPort = conf[confKeys.server.portBind]
  let baseUrl = conf[confKeys.server.baseUrl]

  app.listen(bindPort, () => {
    log.info(`Server Started at ${baseUrl}:'${bindPort}`)
    log.info('Press Ctrl+C to Stop')
  })
}

boot()