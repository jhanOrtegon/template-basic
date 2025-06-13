import { UserResponseDto } from '@/application/dto/user/UserResponseDto'
import { UserApplicationService } from '@/application/services/UserApplicationService'

export class GetUserUseCase {
  constructor(private userService: UserApplicationService) {}

  async execute(id: string): Promise<UserResponseDto> {
    return this.userService.getUserById(id)
  }
}
