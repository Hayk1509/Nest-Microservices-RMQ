import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'hayk1509',
      database: 'product_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductModule,
  ],
  providers: [],
})
export class AppModule {}
