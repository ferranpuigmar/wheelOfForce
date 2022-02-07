import { UsersRepository } from '../repositories/users.repository';
import { Controller, Get, Param } from '@nestjs/common';
import { User } from '../dto/user';

@Controller()
export class GetUserByIdController {
  constructor(private userDB: UsersRepository) {}
  @Get('/api/user/:id')
  async getUserById(@Param() params: { id: string }): Promise<User> {
    return this.userDB.findById(`${params.id}`);
  }
}
