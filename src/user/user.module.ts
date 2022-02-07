import { RegisterUserController } from './controllers/registerUserController';
import { GetUserByIdController } from './controllers/getUserById.controller';
import { UsersRepository } from './repositories/users.repository';
import { UsersSchema } from './schemas/users.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { GetUsersController } from './controllers/getUsers.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UsersSchema,
      },
    ]),
  ],
  controllers: [
    GetUsersController,
    GetUserByIdController,
    RegisterUserController,
  ],
  providers: [UsersRepository],
})
export class UserModule {}
