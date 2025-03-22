import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'hayk1509',
      database: 'users_db',
      autoLoadEntities: true,
      synchronize: true,
    }),

    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
