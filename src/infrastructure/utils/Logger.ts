export class Logger {
  static info(msg: string, meta?: any) {
    console.info(`INFO: ${msg}`, meta)
  }
  static warn(msg: string, meta?: any) {
    console.warn(`WARN: ${msg}`, meta)
  }
  static error(msg: string, meta?: any) {
    console.error(`ERROR: ${msg}`, meta)
  }
}
