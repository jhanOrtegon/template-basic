import { User } from '../entities/User.entity'
import { NotFoundException } from '../exceptions/NotFoundException'
import { ValidationException, type ValidationErrorDetail } from '../exceptions/ValidationException'

import { type IUserRepository } from '@/infrastructure/repositories/user/UserRepository'

export class UserDomainService {
  constructor(private userRepo: IUserRepository) {}

  async getUserById(id: string): Promise<User> {
    const user = await this.userRepo.findById(id)
    if (!user) {
      throw new NotFoundException('User', id)
    }
    return user
  }

  validateUser(user: User): void {
    const errors: ValidationErrorDetail[] = []
    if (!user.email.includes('@')) {
      errors.push({ field: 'email', message: 'Email must be valid' })
    }
    if (!user.name) {
      errors.push({ field: 'name', message: 'Name is required' })
    }
    if (errors.length) {
      throw new ValidationException(errors)
    }
  }
}
