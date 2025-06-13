export class Money {
  constructor(
    public readonly amount: number,
    public readonly currency: string = 'USD',
  ) {
    if (amount < 0) {
      throw new Error('Amount cannot be negative')
    }
    if (!currency.match(/^[A-Z]{3}$/)) {
      throw new Error('Currency must be a 3-letter code')
    }
  }

  add(other: Money): Money {
    if (other.currency !== this.currency) {
      throw new Error('Cannot add Money with different currencies')
    }
    return new Money(this.amount + other.amount, this.currency)
  }

  subtract(other: Money): Money {
    if (other.currency !== this.currency) {
      throw new Error('Cannot subtract Money with different currencies')
    }
    return new Money(this.amount - other.amount, this.currency)
  }

  toString(): string {
    return `${this.currency} ${this.amount.toFixed(2)}`
  }
}
