import { CreateOrderDto } from '@/application/dto/order/CreateOrderDto'
import { OrderResponseDto } from '@/application/dto/order/OrderResponseDto'
import { OrderApplicationService } from '@/application/services/OrderApplicationService'

export class CreateOrderUseCase {
  constructor(private orderService: OrderApplicationService) {}

  async execute(dto: CreateOrderDto): Promise<OrderResponseDto> {
    return this.orderService.createOrder(dto)
  }
}
