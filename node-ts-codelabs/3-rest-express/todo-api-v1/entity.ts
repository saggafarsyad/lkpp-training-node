export class ToDoEntity {
  id: number
  title: string
  content: string
  status: number
  createdAt: Date
  updatedAt: Date

  static readonly STATUS_DO = 1
  static readonly STATUS_DOING = 2
  static readonly STATUS_DONE = 3

  constructor(id: number, title: string, content: string) {
    this.id = id
    this.title = title
    this.content = content
    this.status = ToDoEntity.STATUS_DO
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }
}