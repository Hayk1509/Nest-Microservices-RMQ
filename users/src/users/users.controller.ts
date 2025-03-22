import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get(':users')
  async getUsers(@Param() users: string) {
    return await this.userService.findUserByName(users);
  }

  @Post()
  async createUser(@Body() userData: Partial<User>) {
    return await this.userService.create(userData);
  }
}
