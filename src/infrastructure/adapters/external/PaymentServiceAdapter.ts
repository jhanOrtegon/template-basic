export interface PaymentPayload {
  amount: number
  currency: string
  sourceId: string // token o identificador de fuente de pago
  description?: string
}

export interface PaymentResult {
  success: boolean
  transactionId?: string
  error?: string
}

export class PaymentServiceAdapter {
  async processPayment(payload: PaymentPayload): Promise<PaymentResult> {
    // Ejemplo: llamada a Stripe, PayPal, etc.
    const response = await fetch('/payments/process', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const err = await response.text()
      return { success: false, error: err }
    }

    const data = await response.json()
    return { success: true, transactionId: data.transactionId }
  }
}
