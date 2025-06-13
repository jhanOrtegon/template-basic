import { UserApplicationService } from '@/application/services/UserApplicationService'

export class DeleteUserUseCase {
  constructor(private userService: UserApplicationService) {}

  async execute(id: string): Promise<void> {
    await this.userService.deleteUser(id)
  }
}
