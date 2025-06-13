export class DomainException extends Error {
  public readonly name: string = 'DomainException'

  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, new.target.prototype)
    Error.captureStackTrace(this)
  }
}
