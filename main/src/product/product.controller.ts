import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import {
  ClientProxy,
  ClientProxyFactory,
  EventPattern,
  Transport,
} from '@nestjs/microservices';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  private userClient: ClientProxy;
  private productClient: ClientProxy;

  constructor() {
    // Create a client to connect to the user microservice
    this.userClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [
          'amqps://advfegii:m4V-yEMc_wFCb66mfHNVUo-y3Ny47AVG@possum.lmq.cloudamqp.com/advfegii',
        ],
        queue: 'user_queue',
        queueOptions: { durable: false },
      },
    });

    // Create a client to connect to the product microservice
    this.productClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [
          'amqps://advfegii:m4V-yEMc_wFCb66mfHNVUo-y3Ny47AVG@possum.lmq.cloudamqp.com/advfegii',
        ],
        queue: 'product_queue',
        queueOptions: { durable: false },
      },
    });
  }
  @Get()
  async getAllProducts() {
    console.log('ddd');
    const products = this.productClient.send('get_product', {});
    return products;
  }

  @Post()
  async createProduct(@Body() productData: CreateProductDto) {
    const result = await this.productClient.send('create_new_product', productData);
    return result;
  }
}
