import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy, Payload } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Controller('user-info')
export class UserInfoController {
  constructor(
    @Inject('USER_SERVICE') private readonly clientUser: ClientProxy,
    @Inject('PRODUCT_SERVICE') private readonly clientProduct: ClientProxy,
  ) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const userId = Number(id);
    console.log(userId);
    const userObservable = this.clientUser.send('get_user', userId);
    const productsObservable = this.clientProduct.send(
      'get_product_by_user',
      userId,
    );
    console.log(userObservable);
    const user = await lastValueFrom(userObservable);
    const products = await lastValueFrom(productsObservable);

    return { user, products };
  }
}
