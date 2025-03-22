import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor() {}

  //   async update(
  //     id: number,
  //     updatedProduct: Product,
  //   ): Promise<Product | null> {
  //     return await this.productRepository.update(id, updatedProduct);
  //   }
}
