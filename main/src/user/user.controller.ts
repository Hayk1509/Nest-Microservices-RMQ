import { lastValueFrom } from 'rxjs';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientProxy } from '@nestjs/microservices';

@Controller('user')
export class UserController {
  constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy) {}
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.client.emit('create_new_user', createUserDto);
  }

  @Get()
  findAll() {
    const usersObservable = this.client.send('get_all_users', {});
    return lastValueFrom(usersObservable);
    // return this.clientsService.getUserClient().send('get_all_users', {});
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.client.send('get_user', id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.client.emit('update_user', updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.client.send('delete_user', id);
  }
}
