import fs from 'fs'
import minimist from 'minimist'
import {promisify} from 'util'

// Parse argument
let arg = minimist(process.argv.slice(2))

let filePath = arg.filePath

const fsPromise = promisify(fs.readFile)

console.log(typeof fsPromise)

async function main() {
  try {
    let data = await fsPromise(filePath)  
    console.log(data.toString())
  } catch (e) {
    console.error('cannot read file: ' + e)
  }
}

main()