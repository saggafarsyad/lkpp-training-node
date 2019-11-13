import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'

@Entity('todo_status')
export class ToDoStatusModel {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({name: 'updated_at', type: 'timestamp', nullable: false, default: '1970-01-01 00:00:01'})
  updatedAt: Date
}

@Entity('todo')
export class ToDoModel {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  content: string

  @ManyToOne(type => ToDoStatusModel, masterData => masterData.id)
  @JoinColumn({name: 'status_id'})
  status: number

  @Column({name: 'created_at', type: 'timestamp', nullable: false, default: '1970-01-01 00:00:01'})
  createdAt: Date

  @Column({name: 'updated_at', type: 'timestamp', nullable: false, default: '1970-01-01 00:00:01'})
  updatedAt: Date
}