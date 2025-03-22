import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}
  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }
  async findOne(id: FindOneOptions<Product>): Promise<Product | null> {
    return await this.productRepository.findOne(id);
  }
  async create(product: Product): Promise<Product> {
    return await this.productRepository.save(product);
  }
//   async update(
//     id: number,
//     updatedProduct: Product,
//   ): Promise<Product | null> {
//     return await this.productRepository.update(id, updatedProduct);
//   }
}
