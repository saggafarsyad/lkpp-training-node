import log from './logger'
import fs from 'fs'
import { promisify } from 'util'
import { confKeys } from './constants'

// Declare constants
const CONFIG_FILE = 'config.json'

// Convert to Promise
const readFile = promisify(fs.readFile)

const REQUIRED_KEYS: Array<string> = [
  confKeys.server.portBind,
  confKeys.server.baseUrl,
  confKeys.server.clientSecret,
  confKeys.datasources.todoDb.host,
  confKeys.datasources.todoDb.port,
  confKeys.datasources.todoDb.user,
  confKeys.datasources.todoDb.pass,
  confKeys.datasources.todoDb.dbName,
]

function validate(requiredKeys: Array<string>, conf: any) {
  requiredKeys.forEach(key => {
    if (!conf[key]) {
      log.error(`${key} is a required configuration`)
      process.exit(2)
    }
  });
}

// Load file
export async function initConfig(env: string): Promise<any> {
  // Get config path
  const configPath = `${__dirname}/${env}.${CONFIG_FILE}`
  log.debug('Loading config file: ' + configPath)

  // Read file content
  try {
    let content = await readFile(configPath)
    let conf = JSON.parse(content.toString())

    validate(REQUIRED_KEYS, conf)

    return conf
  } catch (err) {
    log.error(err)
    process.exit(1)
  }

  return
}
