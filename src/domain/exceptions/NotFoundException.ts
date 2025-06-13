import { DomainException } from './DomainException'

export class NotFoundException extends DomainException {
  public readonly name: string = 'NotFoundException'

  constructor(entity: string, id?: string) {
    super(id ? `${entity} not found with id: ${id}` : `${entity} not found`)
    Object.setPrototypeOf(this, new.target.prototype)
    Error.captureStackTrace(this)
  }
}
