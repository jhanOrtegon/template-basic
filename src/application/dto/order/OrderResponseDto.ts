import { Type } from 'class-transformer'
import { ValidateNested, ArrayMinSize, IsUUID, IsNumber, IsDate } from 'class-validator'

export class OrderResponseItemDto {
  @IsUUID('4', { message: 'El productId debe ser un UUID válido.' })
  productId!: string

  @IsNumber({}, { message: 'La cantidad debe ser un número.' })
  quantity!: number

  @IsNumber({}, { message: 'El precio debe ser un número.' })
  price!: number
}

export class OrderResponseDto {
  @IsUUID('4', { message: 'El id de la orden debe ser un UUID válido.' })
  id!: string

  @IsUUID('4', { message: 'El userId debe ser un UUID válido.' })
  userId!: string

  @ValidateNested({ each: true })
  @Type(() => OrderResponseItemDto)
  @ArrayMinSize(1, { message: 'La orden debe contener al menos un ítem.' })
  items!: OrderResponseItemDto[]

  @IsNumber({}, { message: 'El total debe ser un número.' })
  total!: number

  @IsDate({ message: 'createdAt debe ser una fecha válida.' })
  @Type(() => Date)
  createdAt!: Date

  @IsDate({ message: 'updatedAt debe ser una fecha válida.' })
  @Type(() => Date)
  updatedAt!: Date
}
