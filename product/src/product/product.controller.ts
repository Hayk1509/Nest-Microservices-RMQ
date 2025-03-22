import { Controller, Get, Inject } from '@nestjs/common';
import { ProductService } from './product.service';
import { ClientProxy, EventPattern } from '@nestjs/microservices';
import { Product } from './product.entity';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get()
  async getAllProducts() {
    return await this.productService.findAll();
  }
  @EventPattern('create_new_product')
  async createNewProduct(data: Product) {
    console.log(data);
    return await this.productService.create(data);
  }

  @EventPattern('get_all_product')
  async getAllProductsEvent(data: Product[]) {
    console.log('Received event: ', data);
  }
}
