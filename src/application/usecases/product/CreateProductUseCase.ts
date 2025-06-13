import { CreateProductDto } from '@/application/dto/product/CreateProductDto'
import { ProductResponseDto } from '@/application/dto/product/ProductResponseDto'
import { ProductApplicationService } from '@/application/services/ProductApplicationService'

export class CreateProductUseCase {
  constructor(private productService: ProductApplicationService) {}

  async execute(dto: CreateProductDto): Promise<ProductResponseDto> {
    return this.productService.createProduct(dto)
  }
}
