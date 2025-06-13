import { DomainException } from './DomainException'

export interface ValidationErrorDetail {
  field: string
  message: string
}

export class ValidationException extends DomainException {
  public readonly name: string = 'ValidationException'
  public readonly errors: ValidationErrorDetail[]

  constructor(errors: ValidationErrorDetail[]) {
    super('Validation failed')
    this.errors = errors
    Object.setPrototypeOf(this, new.target.prototype)
    Error.captureStackTrace(this)
  }
}
