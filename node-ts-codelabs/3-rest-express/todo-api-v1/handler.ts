import express from 'express'
import { ToDoEntity } from './entity'

export const listTodo = (req: express.Request, res: express.Response) => {
  // Get Filter by title
  let filterTitle = req.query.filter_title

  // TODO: Query Select Todo
  // TODO: Remove dummy todo response
  let todoList: Array<ToDoEntity> = [
    new ToDoEntity(1, 'Push branch day 2', 'push to github'),
    new ToDoEntity(2, 'Push branch day 3', 'push to github'),
  ]
  
  // Compose dummy response
  let resBody = {
    data: todoList
  }

  // Send
  res.send(resBody)
}

export const getTodo = (req: express.Request, res: express.Response) => {
  // Get id from path
  let todoId = req.params.id

  // TODO: Query Select Todo by id
  // TODO: Remove dummy todo response
  // Compose dummy response
  let resBody = {
    data: new ToDoEntity(1, 'Push branch day 2', 'push to github'),
  }

  // Send
  res.send(resBody)
}

export const addTodo = (req: express.Request, res: express.Response) => {
  // Get new todo body
  let todo = req.body

  // TODO: Insert Todo to database

  // Compose dummy response
  let resBody = {
    data: {
      id: 1
    }
  }

  // Send
  res.send(resBody)
}

export const updateTodo = (req: express.Request, res: express.Response) => {
  // Get todo id
  let id = req.params.id
  
  // Get updated value
  let updatedValues = req.body
  console.log(updatedValues)

  // TODO: Get todo by id
  // TODO: If todo not found, return
  // TODO: Update todo

  // Compose dummy response
  let resBody = {
    data: {
      message: 'Success'
    }
  }

  // Send
  res.send(resBody)
}


export const deleteTodo = (req: express.Request, res: express.Response) => {
  // Get todo id
  let id = req.params.id

  // TODO: Get todo by id
  // TODO: If todo not found, return
  // TODO: Delete todo

  // Compose dummy response
  let resBody = {
    data: {
      message: 'Success'
    }
  }

  // Send
  res.send(resBody)
}