export interface IEmailService {
  sendEmail(to: string, subject: string, body: string, cc?: string[], bcc?: string[]): Promise<void>
}
