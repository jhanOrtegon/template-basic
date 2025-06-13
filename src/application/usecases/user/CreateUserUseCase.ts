import { CreateUserDto } from '@/application/dto/user/CreateUserDto'
import { UserResponseDto } from '@/application/dto/user/UserResponseDto'
import { UserApplicationService } from '@/application/services/UserApplicationService'

export class CreateUserUseCase {
  constructor(private userService: UserApplicationService) {}

  async execute(dto: CreateUserDto): Promise<UserResponseDto> {
    return this.userService.createUser(dto)
  }
}
