import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
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
          queue: 'user_queue',
          queueOptions: { durable: false }
        },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}
