import { type IOrderRepository } from './OrderRepository'

import { type Order } from '@/domain/entities/Order.entity'
import { apiClient } from '@/infrastructure/api/ApiClient'
import type { ApiResponse } from '@/infrastructure/utils/ApiResponse'

export class OrderRepositoryImpl implements IOrderRepository {
  async findAll(): Promise<Order[]> {
    const response = await apiClient.get<ApiResponse<Order[]>>('/orders')
    return response.data
  }

  async findById(id: string): Promise<Order> {
    const response = await apiClient.get<ApiResponse<Order>>(`/orders/${id}`)
    return response.data
  }

  async create(order: Order): Promise<Order> {
    const response = await apiClient.post<ApiResponse<Order>>('/orders', order)
    return response.data
  }

  async update(order: Order): Promise<Order> {
    const response = await apiClient.put<ApiResponse<Order>>(`/orders/${order.id}`, order)
    return response.data
  }

  async delete(id: string): Promise<void> {
    await apiClient.delete<ApiResponse<null>>(`/orders/${id}`)
  }

  async cancel(id: string): Promise<Order> {
    const response = await apiClient.delete<ApiResponse<Order>>(`/orders/${id}`)
    return response.data
  }
}
