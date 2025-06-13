import type {
  PaymentPayload,
  PaymentResult,
} from '@/infrastructure/adapters/external/PaymentServiceAdapter'

export interface IPaymentService {
  processPayment(payload: PaymentPayload): Promise<PaymentResult>
}
