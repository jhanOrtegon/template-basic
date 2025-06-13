import { OrderResponseDto } from '@/application/dto/order/OrderResponseDto'
import { OrderApplicationService } from '@/application/services/OrderApplicationService'

export class GetOrdersUseCase {
  constructor(private orderService: OrderApplicationService) {}

  async execute(): Promise<OrderResponseDto[]> {
    // Asumiendo que list quiere todos; podrías crear un método listAll en service
    const orders = await this.orderService.getAllOrders?.()
    return orders
  }
}
