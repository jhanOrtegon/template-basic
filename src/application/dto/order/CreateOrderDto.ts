// src/application/dto/order/CreateOrderDto.ts
import { Type } from 'class-transformer'
import { IsUUID, ArrayMinSize, ValidateNested, IsInt, Min } from 'class-validator'

export class OrderItemDto {
  @IsUUID('4', { message: 'El productId debe ser un UUID válido.' })
  productId!: string

  @IsInt({ message: 'La cantidad debe ser un número entero.' })
  @Min(1, { message: 'La cantidad mínima es 1.' })
  quantity!: number
}

export class CreateOrderDto {
  @IsUUID('4', { message: 'El userId debe ser un UUID válido.' })
  userId!: string

  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  @ArrayMinSize(1, { message: 'La orden debe contener al menos un item.' })
  items!: OrderItemDto[]
}
