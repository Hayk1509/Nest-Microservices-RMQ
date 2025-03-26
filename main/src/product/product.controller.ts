import {
  Body,
  Controller,
  Get,
  Inject,
  Injectable,
  Post,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Controller('product')
export class ProductController {
  constructor(
    @Inject('PRODUCT_SERVICE') private readonly clients: ClientProxy,
  ) {}
  @Get()
  async getAllProducts() {
    const products = this.clients.send('get_product', {});
    return await lastValueFrom(products);
  }

  @Post()
  async createProduct(@Body() productData: CreateProductDto) {
    const result = this.clients.send('create_new_product', productData);
    return result;
  }
}
