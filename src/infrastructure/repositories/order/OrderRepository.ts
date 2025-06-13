import { type Order } from '@/domain/entities/Order'

export interface IOrderRepository {
  findAll(): Promise<Order[]>
  findById(id: string): Promise<Order>
  create(order: Order): Promise<Order>
  update(order: Order): Promise<Order>
  delete(id: string): Promise<void>
}
