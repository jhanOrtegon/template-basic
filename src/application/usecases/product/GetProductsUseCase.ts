import { ProductResponseDto } from '@/application/dto/product/ProductResponseDto'
import { ProductApplicationService } from '@/application/services/ProductApplicationService'

export class GetProductsUseCase {
  constructor(private productService: ProductApplicationService) {}

  async execute(): Promise<ProductResponseDto[]> {
    return this.productService.getAllProducts()
  }
}
