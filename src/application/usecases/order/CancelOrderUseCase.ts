import { OrderResponseDto } from '@/application/dto/order/OrderResponseDto'
import { OrderApplicationService } from '@/application/services/OrderApplicationService'

export class CancelOrderUseCase {
  constructor(private orderService: OrderApplicationService) {}

  async execute(id: string): Promise<OrderResponseDto> {
    // Asumiendo que tu servicio tiene un método cancelOrder
    const canceled = await this.orderService.cancelOrder(id)
    return canceled
  }
}
