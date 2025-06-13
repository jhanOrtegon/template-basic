import { DomainException } from '../exceptions/DomainException'

import {
  PaymentServiceAdapter,
  type PaymentPayload,
  type PaymentResult,
} from '@/infrastructure/adapters/external/PaymentServiceAdapter'

export class PaymentDomainService {
  constructor(private paymentAdapter = new PaymentServiceAdapter()) {}

  async processPayment(payload: PaymentPayload): Promise<PaymentResult> {
    const result = await this.paymentAdapter.processPayment(payload)
    if (!result.success) {
      throw new DomainException(`Payment failed: ${result.error}`)
    }
    return result
  }
}
