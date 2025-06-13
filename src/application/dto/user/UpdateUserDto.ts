import { IsOptional, IsNotEmpty, IsEmail, MinLength } from 'class-validator'

const PASSWORD_MIN_LENGTH = 6

/**
 * DTO para actualización parcial de usuario.
 */
export class UpdateUserDto {
  @IsOptional()
  @IsNotEmpty({ message: 'El nombre no puede estar vacío.' })
  name?: string

  @IsOptional()
  @IsEmail({}, { message: 'El email debe ser válido si se proporciona.' })
  email?: string

  @IsOptional()
  @MinLength(PASSWORD_MIN_LENGTH, { message: 'La contraseña debe tener al menos 6 caracteres.' })
  password?: string
}
