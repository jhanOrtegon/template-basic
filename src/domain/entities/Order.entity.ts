import { Product } from './Product.entity'

export class Order {
  constructor(
    public id: string,
    public userId: string,
    public products: Array<{ product: Product; quantity: number }> = [],
    public total: number = 0,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}

  addProduct(product: Product, quantity: number = 1): void {
    const existing = this.products.find((p) => p.product.id === product.id)
    if (existing) {
      existing.quantity += quantity
    } else {
      this.products.push({ product, quantity })
    }
    this._calculateTotal()
  }

  removeProduct(productId: string): void {
    this.products = this.products.filter((p) => p.product.id !== productId)
    this._calculateTotal()
  }

  private _calculateTotal(): void {
    this.total = this.products.reduce((sum, p) => sum + p.product.price * p.quantity, 0)
    this.updatedAt = new Date()
  }
}
