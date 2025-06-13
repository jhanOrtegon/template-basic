import { type IUserRepository } from './UserRepository'

import { type User } from '@/domain/entities/User.entity'
import { apiClient } from '@/infrastructure/api/ApiClient'
import { type ApiResponse } from '@/utils/ApiResponse'

export class UserRepositoryImpl implements IUserRepository {
  async findAll(): Promise<User[]> {
    const res = await apiClient.get<ApiResponse<User[]>>('/users')
    return res.data
  }

  async findById(id: string): Promise<User> {
    const res = await apiClient.get<ApiResponse<User>>(`/users/${id}`)
    return res.data
  }

  async create(user: User): Promise<User> {
    const res = await apiClient.post<ApiResponse<User>>('/users', user)
    return res.data
  }

  async update(user: User): Promise<User> {
    const res = await apiClient.put<ApiResponse<User>>(`/users/${user.id}`, user)
    return res.data
  }

  async delete(id: string): Promise<void> {
    await apiClient.delete<ApiResponse<null>>(`/users/${id}`)
  }
}
