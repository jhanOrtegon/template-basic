import { v4 as uuidv4, validate as uuidValidate } from 'uuid'

export class UserId {
  private readonly _value: string

  constructor(value?: string) {
    const id = value ?? uuidv4()
    if (!UserId._isValid(id)) {
      throw new Error('Invalid UUID format for UserId')
    }
    this._value = id
  }

  private static _isValid(id: string): boolean {
    return uuidValidate(id)
  }

  toString(): string {
    return this._value
  }
}
