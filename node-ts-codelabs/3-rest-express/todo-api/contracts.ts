import { ToDoEntity } from './entity'
import express from 'express'
import { NextFunction } from 'connect'

export type ExpressHandlerCallback = (req: express.Request, res: express.Response) => Promise<void>
export type ExpressNextCallback = (req: express.Request, res: express.Response, next: NextFunction) => void

export interface ToDoServiceContract {
  list(filterByName: string): Promise<Array<ToDoEntity>>
  get(id: number): Promise<ToDoEntity>
  add(todo: ToDoEntity): Promise<number>
  update(todo: ToDoEntity): Promise<boolean>
  delete(id: number): Promise<boolean>
}

export interface ToDoHandlerContract {
  list(): ExpressHandlerCallback
  get(req: express.Request, res: express.Response): Promise<void>
  add(req: express.Request, res: express.Response): Promise<void>
  update(req: express.Request, res: express.Response): Promise<void>
  delete(req: express.Request, res: express.Response): Promise<void>
}

