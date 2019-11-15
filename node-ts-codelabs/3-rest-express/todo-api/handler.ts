import express from 'express'

import { ToDoHandlerContract, ToDoServiceContract, ExpressHandlerCallback } from './contracts'

export class ToDoRESTHandler implements ToDoHandlerContract {
  private todoService: ToDoServiceContract

  constructor(todoService: ToDoServiceContract) {
    this.todoService = todoService
  }

  list(): ExpressHandlerCallback {
    return async (req: express.Request, res: express.Response): Promise<void> => {
      // Get Filter by title
      let filterTitle = req.query.filter_title

      let todos = await this.todoService.list(filterTitle)

      let resBody = {
        status: 'OK',
        data: todos
      }

      res.send(resBody)
    }
  }

  // TODO: Implement endpoints
  get(req: express.Request, res: express.Response): Promise<void> {
    throw new Error("Method not implemented.");
  }

  // TODO: Implement endpoints
  add(req: express.Request, res: express.Response): Promise<void> {
    throw new Error("Method not implemented.");
  }

  // TODO: Implement endpoints
  update(req: express.Request, res: express.Response): Promise<void> {
    throw new Error("Method not implemented.");
  }

  // TODO: Implement endpoints
  delete(req: express.Request, res: express.Response): Promise<void> {
    throw new Error("Method not implemented.");
  }
}