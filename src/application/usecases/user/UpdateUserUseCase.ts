import { UpdateUserDto } from '@/application/dto/user/UpdateUserDto'
import { UserResponseDto } from '@/application/dto/user/UserResponseDto'
import { UserApplicationService } from '@/application/services/UserApplicationService'

export class UpdateUserUseCase {
  constructor(private userService: UserApplicationService) {}

  async execute(id: string, dto: UpdateUserDto): Promise<UserResponseDto> {
    return this.userService.updateUser(id, dto)
  }
}
