export interface EmailPayload {
  to: string
  subject: string
  body: string
  cc?: string[]
  bcc?: string[]
}
