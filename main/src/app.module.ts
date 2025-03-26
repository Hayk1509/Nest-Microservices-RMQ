import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { UserInfoModule } from './user-info/user-info.module';

@Module({
  imports: [ProductModule, UserModule, UserInfoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
