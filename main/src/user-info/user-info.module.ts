import { Module } from '@nestjs/common';
import { UserInfoController } from './user-info.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqp://advfegii:m4V-yEMc_wFCb66mfHNVUo-y3Ny47AVG@possum.lmq.cloudamqp.com/advfegii',
          ],
          queueOptions: { durable: false, queue: 'user_queue' },
        },
      },

      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqp://advfegii:m4V-yEMc_wFCb66mfHNVUo-y3Ny47AVG@possum.lmq.cloudamqp.com/advfegii',
          ],
          queueOptions: { durable: false, queue: 'product_queue' },
        },
      },
    ]),
  ],
  controllers: [UserInfoController],
  providers: [],
})
export class UserInfoModule {}
