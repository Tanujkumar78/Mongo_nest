import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schemas';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()

export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // console.log(createUserDto);
    const createdCat = new this.UserModel(createUserDto);
    return createdCat.save();
  }

  async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }
  
 
  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
