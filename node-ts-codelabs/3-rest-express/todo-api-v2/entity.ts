export class ToDoEntity {
  id: number
  title: string
  content: string
  attachedFile: string
  status: number
  createdAt: number
  updatedAt: number

  static readonly STATUS_DO = 1
  static readonly STATUS_DOING = 2
  static readonly STATUS_DONE = 3
}