export class AnalyticsAdapter {
  trackEvent(name: string, data?: Record<string, any>) {
    // Enviar evento a Analytics externo
    console.log('Tracking Event:', name, data)
  }
}
