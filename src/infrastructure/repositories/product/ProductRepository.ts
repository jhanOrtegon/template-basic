import { type Product } from '@/domain/entities/Product.entity'

export interface IProductRepository {
  findAll(): Promise<Product[]>
  findById(id: string): Promise<Product>
  create(product: Product): Promise<Product>
  update(product: Product): Promise<Product>
  delete(id: string): Promise<void>
}
