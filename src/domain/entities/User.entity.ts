export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public passwordHash?: string,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}

  updateName(name: string) {
    this.name = name
    this.updatedAt = new Date()
  }

  updateEmail(email: string) {
    this.email = email
    this.updatedAt = new Date()
  }
}
