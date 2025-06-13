export interface NotificationPayload {
  userId: string
  title: string
  message: string
}

export class NotificationServiceAdapter {
  async sendNotification(payload: NotificationPayload): Promise<void> {
    // Ejemplo: llamada a un backend de notificaciones (Firebase, OneSignal, etc.)
    const response = await fetch('/notifications/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!response.ok) {
      throw new Error(`Failed to send notification: ${response.statusText}`)
    }
  }
}
