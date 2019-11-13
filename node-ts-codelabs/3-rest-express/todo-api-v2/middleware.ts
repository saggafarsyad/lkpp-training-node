import { Request, Response,  } from 'express'

const CLIENT_SECRET = process.env['CLIENT_SECRET']

export const authMiddleware = (req: Request, res:  Response, next: any) => {
  let clientSecret = req.header('X-API-Client-Secret')

  if (clientSecret != CLIENT_SECRET) {
    let resBody = {
      status: 'ERR_401',
      message: 'Unauthorized'
    }
    
    res.statusCode = 401
    res.send(resBody)
    return
  }

  next()
  return
}