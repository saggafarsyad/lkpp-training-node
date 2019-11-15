import express from 'express'
import { NextFunction } from 'connect'
import { ExpressNextCallback } from './contracts'


export class AuthMiddleware {
  private clientSecret: string

  constructor(clientSecret: string) {
    this.clientSecret = clientSecret
  }

  auth(): ExpressNextCallback {
    return (req: express.Request, res: express.Response, next: NextFunction): void => {
      let clientSecret = req.header('X-API-Client-Secret')
      if (clientSecret != this.clientSecret) {
        let resBody = {
          status: 'ERROR',
          code: '401',
          message: 'Unauthorized'
        }

        res.statusCode = 401
        res.send(resBody)
        return
      }

      next()
      return
    }
  }
}