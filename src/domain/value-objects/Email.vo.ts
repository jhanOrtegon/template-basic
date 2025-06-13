export class Email {
  private readonly _value: string

  constructor(value: string) {
    if (!Email._isValid(value)) {
      throw new Error('Invalid email format')
    }
    this._value = value
  }

  private static _isValid(email: string): boolean {
    // Simple regex para validar email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  toString(): string {
    return this._value
  }
}
