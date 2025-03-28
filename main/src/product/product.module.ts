import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqp://advfegii:m4V-yEMc_wFCb66mfHNVUo-y3Ny47AVG@possum.lmq.cloudamqp.com/advfegii',
          ],
          queue: 'product_queue',
          queueOptions: { durable: false },
        },
      },
    ]),
  ],
  controllers: [ProductController],
})
export class ProductModule {}
