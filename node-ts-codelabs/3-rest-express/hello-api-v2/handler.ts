import express from 'express'

export const helloHandler = (req: express.Request, res: express.Response) => {
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