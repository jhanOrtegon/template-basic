import { Order } from '../entities/Order.entity'
import { NotFoundException } from '../exceptions/NotFoundException'
import { ValidationException, type ValidationErrorDetail } from '../exceptions/ValidationException'

export class OrderDomainService {
  validateOrder(order: Order): void {
    const errors: ValidationErrorDetail[] = []

    if (!order.userId) {
      errors.push({ field: 'userId', message: 'User ID is required' })
    }
    if (order.products.length === 0) {
      errors.push({ field: 'products', message: 'Order must contain at least one product' })
    }
    if (errors.length) {
      throw new ValidationException(errors)
    }
  }

  calculateTotal(order: Order): number {
    if (!order) {
      throw new NotFoundException('Order')
    }
    return order.products.reduce((sum, p) => sum + p.product.price * p.quantity, 0)
  }
}
