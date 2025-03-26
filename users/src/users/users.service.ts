import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { FindOneOptions, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(userData: Partial<User>): Promise<User> {
    const user = await this.userRepository.create(userData);
    return await this.userRepository.save(user);
  }
  async findAll(): Promise<User[]> {
    console.log('first')
    return await this.userRepository.find();
  }
  async findUserByName(id: number): Promise<User | null> {
    return await this.userRepository.findOne({
      where: {
        id: id,
      },
    });
  }
  async update(id: number, updatedUser: User): Promise<UpdateResult> {
    return await this.userRepository.update(id, {
      ...updatedUser,
    });
  }
  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
