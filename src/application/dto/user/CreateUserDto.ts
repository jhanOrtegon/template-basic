import { IsNotEmpty, IsEmail, MinLength } from 'class-validator'

/**
 * DTO para creación de un usuario.
 */
export class CreateUserDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  name!: string

  @IsEmail({}, { message: 'El email debe ser válido.' })
  email!: string

  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres.' })
  password!: string
}
