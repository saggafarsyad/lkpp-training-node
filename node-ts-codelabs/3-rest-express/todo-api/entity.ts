export class ToDoEntity {
  id: number
  title: string
  content: string
  status: number
  attachedFile?: string
  attachedFileUrl: string
  createdAt: number
  updatedAt: number
}