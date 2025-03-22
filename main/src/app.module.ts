import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule],
  controllers: [],
  providers: [ProductService],
})
export class AppModule {}
