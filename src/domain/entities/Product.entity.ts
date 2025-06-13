export class Product {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}
}
