export interface INotificationService {
  sendNotification(
    userId: string,
    title: string,
    message: string,
    data?: Record<string, any>,
  ): Promise<void>
}
