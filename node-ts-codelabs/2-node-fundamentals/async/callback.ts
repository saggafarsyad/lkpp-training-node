import fs from 'fs'
import minimist from 'minimist'

// Parse argument
let arg = minimist(process.argv.slice(2))

let filePath = arg.filePath

fs.readFile(filePath, 
  (err, data) => {
    if (err) {
      console.log('cannot read file: ' + err)
      return
    }

    // Print file content
    console.log(data.toString())

    console.log("done")
  }
)

console.log("reading file...")