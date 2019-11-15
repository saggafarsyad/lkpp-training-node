import { ToDoServiceContract } from './contracts'
import { ToDoStatus } from './constants'
import { Connection } from 'typeorm'
import { ToDoEntity } from './entity'
import { ToDoModel } from './model'

export class ToDoService implements ToDoServiceContract {
  composeTodoResp(data: ToDoModel): ToDoEntity {
    // Resolve attached file url
    let url = ''
    if (data.attachedFile) {
      url = 'http://localhost:3000/assets/todo/' + data.attachedFile
    }

    let resp: ToDoEntity = {
      id: data.id,
      title: data.title,
      content: data.content,
      attachedFileUrl: url, // TODO: Resolve url
      status: data.status,
      createdAt: data.createdAt.getTime() / 1000,
      updatedAt: data.updatedAt.getTime() / 1000,
    }
    return resp
  }

  async list(filterByTitle: string): Promise<ToDoEntity[]> {
    let builder = this.db
      .getRepository(ToDoModel)
      .createQueryBuilder("todo")

    if (filterByTitle != '') {
      builder = builder.where('title LIKE :title', { title: `%${filterByTitle}%` })
    }

    let rows = await builder.getMany()

    let result = rows.map(v => this.composeTodoResp(v))

    return result
  }

  async get(id: number): Promise<ToDoEntity> {
    let todo = await this.db
      .getRepository(ToDoModel)
      .createQueryBuilder("todo")
      .where('id = :id', { id })
      .getOne()

    if (!todo) {
      throw Error('todo not found')
    }

    // Compose
    const result = this.composeTodoResp(todo)

    return result
  }

  async add(todo: ToDoEntity): Promise<number> {
    let timestamp = new Date()

    // Create instance
    let todoModel = new ToDoModel()
    todoModel.title = todo.title
    todoModel.content = todo.content
    todoModel.status = ToDoStatus.Do
    todoModel.attachedFile = todo.attachedFile
    todoModel.createdAt = timestamp
    todoModel.updatedAt = timestamp

    // Execute query
    let result = await this.db
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

  async update(todo: ToDoEntity): Promise<boolean> {
    let updatedAt = new Date()
    // Query Select Todo
    let result = await this.db
      .createQueryBuilder()
      .update(ToDoModel)
      .set({ title: todo.title, content: todo.content, updatedAt })
      .where('id = :id', { id: todo.id })
      .execute()

    if (result.raw != undefined) {
      return result.raw.affectedRows > 0
    }

    return true
  }

  async delete(id: number): Promise<boolean> {
    let result = await this.db
      .createQueryBuilder()
      .delete()
      .from(ToDoModel)
      .where('id = :id', { id })
      .execute()

    if (result.affected != undefined) {
      return result.affected > 0
    }

    return true
  }

  // Member
  private db: Connection

  constructor(db: Connection) {
    this.db = db
  }

} 