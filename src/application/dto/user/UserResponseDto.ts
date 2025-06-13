import { Type } from 'class-transformer'
import { IsUUID, IsString, IsEmail, IsDate } from 'class-validator'

/**
 * DTO para la respuesta de datos de un usuario.
 */
export class UserResponseDto {
  @IsUUID('4', { message: 'El id debe ser un UUID válido.' })
  id!: string

  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  name!: string

  @IsEmail({}, { message: 'El email debe ser válido.' })
  email!: string

  @IsDate({ message: 'createdAt debe ser una fecha válida.' })
  @Type(() => Date)
  createdAt!: Date

  @IsDate({ message: 'updatedAt debe ser una fecha válida.' })
  @Type(() => Date)
  updatedAt!: Date
}
