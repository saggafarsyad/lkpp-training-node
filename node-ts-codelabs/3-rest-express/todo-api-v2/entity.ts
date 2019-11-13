export class ToDoEntity {
  id: number
  title: string
  content: string
  status: number
  createdAt: number
  updatedAt: number

  static readonly STATUS_DO = 1
  static readonly STATUS_DOING = 2
  static readonly STATUS_DONE = 3

  constructor(id: number, title: string, content: string) {
    this.id = id
    this.title = title
    this.content = content
    this.status = ToDoEntity.STATUS_DO
    this.createdAt = 0
    this.updatedAt = 0
  }
}