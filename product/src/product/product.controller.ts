import { Controller, Get, Inject } from '@nestjs/common';
import { ProductService } from './product.service';
import { MessagePattern } from '@nestjs/microservices';
import { Product } from '../entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @MessagePattern('create_new_product')
  createNewProduct(data: Product) {
    return this.productService.create(data);
  }
  @MessagePattern('get_product_by_user')
  getProductByUser(id: number) {
    console.log('second get product by user');
    return this.productService.getProductByUser(id);
  }
  @MessagePattern('example')
  getExample(id: string) {
    return 'second get product by user';
  }

  @MessagePattern('get_product')
  async getAllProductsEvent() {
    console.log('first get all products');
    return await this.productService.findAll();
  }
}
