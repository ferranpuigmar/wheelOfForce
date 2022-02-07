import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../dto/user';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findById(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async addUser(user: User): Promise<User> {
    const userData = user;

    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.password, saltOrRounds);
    userData.password = hashedPassword;

    const newUser = new this.userModel(userData);
    await newUser.save();

    return newUser.toObject({ versionKey: false });
  }
}
