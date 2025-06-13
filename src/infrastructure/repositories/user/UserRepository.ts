import { type User } from '@/domain/entities/User.entity'

export interface IUserRepository {
  findAll(): Promise<User[]>
  findById(id: string): Promise<User>
  create(user: User): Promise<User>
  update(user: User): Promise<User>
  delete(id: string): Promise<void>
}
