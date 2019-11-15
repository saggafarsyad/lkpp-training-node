import log from './logger'
import { confKeys } from './constants'
import 'reflect-metadata'
import { createConnection, Connection } from 'typeorm'
import { ToDoModel, ToDoStatusModel} from './model'

const SYNC_OPT = process.env.SYNC_OPT == 'true' ? true : false

export async function initDb(conf: any): Promise<Connection> {
  // Get Connections
  let host = conf[confKeys.datasources.todoDb.host]
  let port = conf[confKeys.datasources.todoDb.port]
  let user = conf[confKeys.datasources.todoDb.user]
  let pass = conf[confKeys.datasources.todoDb.pass]
  let dbName = conf[confKeys.datasources.todoDb.dbName]
  
  log.debug('Connecting to ' + dbName)
  log.debug('Sync Enabled: ' + SYNC_OPT)
  return await createConnection({
    type: 'mysql',
    host: host,
    port: port,
    username: user,
    password: pass,
    database: dbName,
    entities: [
      ToDoStatusModel,
      ToDoModel
    ],
    synchronize: SYNC_OPT,
    logging: false
  })
}
