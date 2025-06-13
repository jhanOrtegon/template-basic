import { CreateUserDto } from '@/application/dto/user/CreateUserDto'
import { UpdateUserDto } from '@/application/dto/user/UpdateUserDto'
import { UserResponseDto } from '@/application/dto/user/UserResponseDto'
import { User } from '@/domain/entities/User.entity'
import { UserDomainService } from '@/domain/services/UserDomainService'
import type { IUserRepository } from '@/infrastructure/repositories'

export class UserApplicationService {
  constructor(
    private userRepo: IUserRepository,
    private domainService = new UserDomainService(userRepo),
  ) {}

  async createUser(dto: CreateUserDto): Promise<UserResponseDto> {
    const user = new User('', dto.name, dto.email)
    this.domainService.validateUser(user)
    const saved = await this.userRepo.create(user)
    return {
      id: saved.id,
      name: saved.name,
      email: saved.email,
      createdAt: saved.createdAt,
      updatedAt: saved.updatedAt,
    }
  }

  async updateUser(id: string, dto: UpdateUserDto): Promise<UserResponseDto> {
    const existing = await this.domainService.getUserById(id)
    if (dto.name) {
      existing.updateName(dto.name)
    }
    if (dto.email) {
      existing.updateEmail(dto.email)
    }
    this.domainService.validateUser(existing)
    const updated = await this.userRepo.update(existing)
    return {
      id: updated.id,
      name: updated.name,
      email: updated.email,
      createdAt: updated.createdAt,
      updatedAt: updated.updatedAt,
    }
  }

  async getUserById(id: string): Promise<UserResponseDto> {
    const user = await this.domainService.getUserById(id)
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }
  }

  async deleteUser(id: string): Promise<void> {
    await this.userRepo.delete(id)
  }
}
