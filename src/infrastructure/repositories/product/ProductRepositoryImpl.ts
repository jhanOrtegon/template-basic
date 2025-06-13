import { type IProductRepository } from './ProductRepository'

import { type Product } from '@/domain/entities/Product.entity'
import { apiClient } from '@/infrastructure/api/ApiClient'
import type { ApiResponse } from '@/infrastructure/utils/ApiResponse'

export class ProductRepositoryImpl implements IProductRepository {
  async findAll(): Promise<Product[]> {
    const response = await apiClient.get<ApiResponse<Product[]>>('/products')
    return response.data
  }

  async findById(id: string): Promise<Product> {
    const response = await apiClient.get<ApiResponse<Product>>(`/products/${id}`)
    return response.data
  }

  async create(product: Product): Promise<Product> {
    const response = await apiClient.post<ApiResponse<Product>>('/products', product)
    return response.data
  }

  async update(product: Product): Promise<Product> {
    const response = await apiClient.put<ApiResponse<Product>>(`/products/${product.id}`, product)
    return response.data
  }

  async delete(id: string): Promise<void> {
    await apiClient.delete<ApiResponse<null>>(`/products/${id}`)
  }
}
