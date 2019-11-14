import 'reflect-metadata'
import { createConnection, Connection } from 'typeorm'
import { ToDoModel, ToDoStatusModel} from './model'

const SYNC_DB = process.env.SYNC_DB == 'true' ? true : false

export async function initDb(): Promise<Connection> {
  console.log('init db...')
  console.log('sync db: ' + SYNC_DB)
  return await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3308,
    username: 'root',
    password: 'root',
    database: 'localdev_bootcamp_node_db',
    entities: [
      ToDoStatusModel,
      ToDoModel
    ],
    synchronize: SYNC_DB,
    logging: false
  })
}

