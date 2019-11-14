import express from 'express'

// Init app
const app = express()

const helloHandler = async (req: express.Request, res: express.Response) => {
  // Get query
  let name = req.query["name"]

  if (!name) {
    let respBody = {
      message: 'Name is empty'
    }
    res.send(respBody)
    return  
  }

  // If name is set
  console.log('Incoming request from ' + name)

  let respBody = {
    message: 'Hello ' + name
  }
  res.send(respBody)
}

// Routing
app.get('/hello', helloHandler) 

// Start HTTP server
const PORT = 3000

app.listen(PORT, () => {  
  console.log('Server Started at localhost:' + PORT)
  console.log('Press Ctrl+C to Stop')
})