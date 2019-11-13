import express, { Router } from 'express'
import { ToDoEntity } from './entity'
import { Connection } from 'typeorm'
import { ToDoModel } from './model'

export const initRouter = (db: Connection): Router => {
  // Init router
  let router = Router()

  // Service
  async function findTodo(): Promise<Array<ToDoModel>>  {
    // Query Select Todo
    return await db
      .getRepository(ToDoModel)
      .createQueryBuilder("todo")
      .getMany()
  }

  async function findTodoById(id: number): Promise<ToDoModel | undefined>  {
    // Query Select Todo
    return await db
      .getRepository(ToDoModel)
      .createQueryBuilder("todo")
      .where('todo.id = :id', { id })
      .getOne()
  }

  async function insertTodo(title: string, content: string): Promise<number> {
    let timestamp = new Date()

    // Create instance
    let todo = new ToDoModel()
    todo.title = title
    todo.content = content
    todo.status = ToDoEntity.STATUS_DO
    todo.createdAt = new Date()
    todo.updatedAt = new Date()

    // Execute query
    let result = await db
      .createQueryBuilder()
      .insert()
      .into(ToDoModel)
      .values(todo)
      .execute()

    // Get auto increment id
    let resultId = result.identifiers[0].id

    // Return id
    return resultId
  }

  // Handlers
  const listTodoHandler = (req: express.Request, res: express.Response) => {
    // Get Filter by title
    let filterTitle = req.query.filter_title

    findTodo()
      .then(users => {
        res.send(users)
      })
      .catch(err => {
        console.error('unable to retrieve todos: ', err)

        const resBody = {
          code: '500',
          message: 'Internal Error'
        }

        res.statusCode = 500
        res.send(resBody)
      })
  }

  const getTodoHandler = (req: express.Request, res: express.Response) => {
    // Get id from path
    let idStr = req.params.id

    // Parse id to number
    let id = parseInt(idStr)

    // Validate
    if (Number.isNaN(id)) {
      res.statusCode = 400

      let resBody = {
        status: 'ERR_TODO2',
        message: 'Id must a number'
      }

      res.send(resBody)
      return
    }

    // Query Select Todo by id
    findTodoById(id)
      .then(todo => {
        // If todo not found, send response error
        if (!todo) {
          let resBody = {
            status: 'ERR_TODO1',
            message: 'To do not found'
          }

          res.send(resBody)
          return
        }

        // Else, send success response
        let resBody = {
          status: 'OK',
          data: todo
        }

        // Send
        res.send(resBody)
      })
      .catch(err => {
        console.error('unable to retrieve todos: ', err)

        const resBody = {
          code: '500',
          message: 'Internal Error'
        }

        res.statusCode = 500
        res.send(resBody)
      })
  }

  const addTodoHandler = (req: express.Request, res: express.Response) => {
    // Get new todo body
    let todo = req.body
  
    // Insert Todo to database
    insertTodo(todo.title, todo.content)
      .then(id => {
        // Compose dummy response
        let resBody = {
          data: { id }
        }

        // Send
        res.send(resBody)
      })
      .catch(err => {
        console.error('unable to insert todos: ', err)

        const resBody = {
          code: '500',
          message: 'Internal Error'
        }

        res.statusCode = 500
        res.send(resBody)
      })
  }

  // Route
  router.get('/todo', listTodoHandler) // List all To Do
  router.post('/todo', addTodoHandler) // Create a To Do
  router.get('/todo/:id', getTodoHandler) // List all To Do

  return router
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