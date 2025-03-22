import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { ClientProxy, EventPattern } from '@nestjs/microservices';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy,
  ) {}
  @Get()
  async getAllProducts() {
    const data = await this.productService.findAll();
    this.client.emit('get_all_product', data);
    return data;
  }
  @Post()
  async createProduct(@Body() createProductDto: Product) {
    const data = await this.productService.create(createProductDto);
    console.log(data);
    this.client.emit('create_new_product', data);
    return data;
  }
}
