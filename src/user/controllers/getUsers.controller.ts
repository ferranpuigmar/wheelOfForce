import { UsersRepository } from '../repositories/users.repository';
import { Controller, Get } from '@nestjs/common';
import { User } from '../dto/user';

@Controller()
export class GetUsersController {
  constructor(private usersDB: UsersRepository) {}
  @Get('/api/users')
  async getUsers(): Promise<User[]> {
    return this.usersDB.findAll();
  }
}
