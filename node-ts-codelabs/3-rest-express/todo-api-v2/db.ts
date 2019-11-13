import 'reflect-metadata'
import { createConnection, Connection } from 'typeorm'
import { ToDoModel, ToDoStatusModel} from './model'

export async function initDb(): Promise<Connection> {
  console.log('init db...')
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
    synchronize: false,
    logging: false
  })
}

