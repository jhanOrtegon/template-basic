import { CreateProductDto } from '@/application/dto/product/CreateProductDto'
import { ProductResponseDto } from '@/application/dto/product/ProductResponseDto'
import { ProductApplicationService } from '@/application/services/ProductApplicationService'

export class UpdateProductUseCase {
  constructor(private productService: ProductApplicationService) {}

  async execute(id: string, dto: CreateProductDto): Promise<ProductResponseDto> {
    // Assuming application service has updateProduct method
    return this.productService.updateProduct(id, dto)
  }
}
