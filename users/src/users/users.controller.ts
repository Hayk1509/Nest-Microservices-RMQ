import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { MessagePattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @MessagePattern('get_all_users')
  getUsers() {
    return this.userService.findAll();
  }

  @MessagePattern('get_user')
  async findOne(id: number) {
    return this.userService.findUserByName(id);
  }
  @MessagePattern('create_new_user')
  createUser(userData: Partial<User>) {
    return this.userService.create(userData);
  }

  @MessagePattern('update_user')
  updateUser(data: { id: number; updatedUser: User }) {
    return this.userService.update(data.id, data.updatedUser);
  }

  @MessagePattern('delete_user')
  deleteUser(id: number) {
    return this.userService.delete(id);
  }
}
