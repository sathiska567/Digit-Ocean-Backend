import { Injectable } from '@nestjs/common';
import { CreateRegisterUserDto } from './dto/create-register-user.dto';
import { UpdateRegisterUserDto } from './dto/update-register-user.dto';
import { RegisterUser } from './schemas/register-user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class RegisterUserService {
  
  constructor(
    @InjectModel("registerUser")
    private readonly registerUserModel: Model<RegisterUser>,
    private readonly jwtService:JwtService
  ) {}


  async createUser(registerUserDetails: RegisterUser) {
    try {
      console.log(registerUserDetails);
      const salt = bcrypt.genSaltSync(10);

      // generate hash password
      const hashPassword = bcrypt.hashSync(registerUserDetails.password, salt);
      registerUserDetails.password = hashPassword;

      // store data inside the database
      const response = new this.registerUserModel(registerUserDetails) 
      await response.save()

      return {
        success:true,
        message:"User created successfully",
        data:response
      }
      
    } catch (error) {
       return {
         success:false,
         message:error.message
       }
    }
  }

}
