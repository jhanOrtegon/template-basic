import { Type } from 'class-transformer'
import { IsUUID, IsString, IsNumber, IsDate } from 'class-validator'

/**
 * DTO para la respuesta de un producto.
 */
export class ProductResponseDto {
  @IsUUID('4', { message: 'El id debe ser un UUID válido.' })
  id!: string

  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  name!: string

  @IsString({ message: 'La descripción debe ser una cadena de texto.' })
  description!: string

  @IsNumber({}, { message: 'El precio debe ser un número.' })
  price!: number

  @IsDate({ message: 'createdAt debe ser una fecha válida.' })
  @Type(() => Date)
  createdAt!: Date

  @IsDate({ message: 'updatedAt debe ser una fecha válida.' })
  @Type(() => Date)
  updatedAt!: Date
}
