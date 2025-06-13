import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator'

/**
 * DTO para creación de un producto.
 */
export class CreateProductDto {
  @IsNotEmpty({ message: 'El nombre del producto es obligatorio.' })
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  name!: string

  @IsNotEmpty({ message: 'La descripción del producto es obligatoria.' })
  @IsString({ message: 'La descripción debe ser una cadena de texto.' })
  description!: string

  @IsNumber({}, { message: 'El precio debe ser un número.' })
  @Min(0, { message: 'El precio no puede ser negativo.' })
  price!: number
}
