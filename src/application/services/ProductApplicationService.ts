import { CreateProductDto } from '@/application/dto/product/CreateProductDto'
import { ProductResponseDto } from '@/application/dto/product/ProductResponseDto'
import { Product } from '@/domain/entities/Product.entity'
import type { IProductRepository } from '@/infrastructure/repositories'

export class ProductApplicationService {
  constructor(private productRepo: IProductRepository) {}

  async createProduct(dto: CreateProductDto): Promise<ProductResponseDto> {
    const product = new Product('', dto.name, dto.description, dto.price)
    const saved = await this.productRepo.create(product)
    return {
      id: saved.id,
      name: saved.name,
      description: saved.description,
      price: saved.price,
      createdAt: saved.createdAt,
      updatedAt: saved.updatedAt,
    }
  }

  async getAllProducts(): Promise<ProductResponseDto[]> {
    const list = await this.productRepo.findAll()
    return list.map((saved) => ({
      id: saved.id,
      name: saved.name,
      description: saved.description,
      price: saved.price,
      createdAt: saved.createdAt,
      updatedAt: saved.updatedAt,
    }))
  }

  async updateProduct(id: string, dto: CreateProductDto): Promise<ProductResponseDto> {
    // Obtener el producto existente
    const existing = await this.productRepo.findById(id)
    // Actualizar propiedades
    existing.name = dto.name
    existing.description = dto.description
    existing.price = dto.price
    // Persistir cambios
    const updated = await this.productRepo.update(existing)
    return {
      id: updated.id,
      name: updated.name,
      description: updated.description,
      price: updated.price,
      createdAt: updated.createdAt,
      updatedAt: updated.updatedAt,
    }
  }
}
