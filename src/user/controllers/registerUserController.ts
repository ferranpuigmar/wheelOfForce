import { User } from './../dto/user.d';
import { UsersRepository } from './../repositories/users.repository';
import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class RegisterUserController {
  constructor(private usersDB: UsersRepository) {}
  @Post('/api/user')
  async createUser(@Body() user: User): Promise<User> {
    return this.usersDB.addUser(user);
  }
}
