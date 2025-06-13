// src/application/services/OrderApplicationService.ts
import { CreateOrderDto } from '@/application/dto/order/CreateOrderDto'
import { OrderResponseDto } from '@/application/dto/order/OrderResponseDto'
import { Order } from '@/domain/entities/Order.entity'
import { OrderDomainService } from '@/domain/services/OrderDomainService'
import type { IOrderRepository } from '@/infrastructure/repositories'

export class OrderApplicationService {
  constructor(
    private orderRepo: IOrderRepository,
    private domainService = new OrderDomainService(),
  ) {}

  async createOrder(dto: CreateOrderDto): Promise<OrderResponseDto> {
    // Validar datos de entrada
    const order = new Order(dto.userId, dto.userId)
    dto.items.forEach((item) => {
      order.addProduct(
        { id: item.productId, name: '', description: '', price: 0 } as any,
        item.quantity,
      )
    })
    this.domainService.validateOrder(order)

    // Persistir
    const saved = await this.orderRepo.create(order)

    // Mapear a DTO de respuesta
    return this._toDto(saved)
  }

  async getOrderById(id: string): Promise<OrderResponseDto> {
    const order = await this.orderRepo.findById(id)
    return this._toDto(order)
  }

  async getAllOrders(): Promise<OrderResponseDto[]> {
    const orders = await this.orderRepo.findAll()
    return orders.map((order) => this._toDto(order))
  }

  async cancelOrder(id: string): Promise<OrderResponseDto> {
    // Suponiendo que el repositorio implemente la lógica de cancelación
    const order = await this.orderRepo.cancel(id)
    return this._toDto(order)
  }

  private _toDto(order: Order): OrderResponseDto {
    return {
      id: order.id,
      userId: order.userId,
      items: order.products.map((p) => ({
        productId: p.product.id,
        quantity: p.quantity,
        price: p.product.price,
      })),
      total: order.total,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
    }
  }
}

// Note: Asegúrate de que IOrderRepository.interface incluya los métodos findAll() y cancel().
