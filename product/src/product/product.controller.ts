import { Controller, Get, Inject } from '@nestjs/common';
import { ProductService } from './product.service';
import { MessagePattern } from '@nestjs/microservices';
import { Product } from '../entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get()
  async getAllProducts() {
    return await this.productService.findAll();
  }
  @MessagePattern('create_new_product')
  async createNewProduct(data: Product) {
    console.log(data);
    return await this.productService.create(data);
  }

  @MessagePattern('get_product')
  async getAllProductsEvent(data: Product[]) {
    console.log('get all');
    return this.productService.findAll();
  }
}
