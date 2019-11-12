import fs from 'fs'
import minimist from 'minimist'
import {promisify} from 'util'

// Parse argument
let arg = minimist(process.argv.slice(2))

let filePath = arg.filePath

const fsPromiseUtil = promisify(fs.readFile)

const fsPromise = (filePath: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        return reject(err)
      }

      return resolve(data)
    })
  })
}

fsPromise(filePath)
  .then(data => {
    console.log(data)
    console.log("done")
  })
  .catch(err => {
    console.error('cannot read file: ' + err)
  })

fsPromiseUtil(filePath)
  .then(data => {
    console.log(data)
    console.log("done")
  })
  .catch(err => {
    console.error('cannot read file: ' + err)
  })

// fs.readFile(filePath, 
//   (err, data) => {
//     if (err) {
//       console.log('cannot read file: ' + err)
//       return
//     }

//     // Print file content
//     console.log(data.toString())

//     console.log("done")
//   }
// )

// console.log("reading file...")