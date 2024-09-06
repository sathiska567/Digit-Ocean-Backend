import { Injectable } from '@nestjs/common';
import { CreateLoginUserDto } from './dto/create-login-user.dto';
import { UpdateLoginUserDto } from './dto/update-login-user.dto';
import { Model } from 'mongoose';
import { RegisterUser } from 'src/register-user/schemas/register-user.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class LoginUserService {
  constructor(
    @InjectModel('registerUser')
    private readonly userModel: Model<RegisterUser>,
    private readonly jwtService: JwtService
  ){}

  // create(createLoginUserDto: CreateLoginUserDto) {
  //   return 'This action adds a new loginUser';
  // }

  // findAll() {
  //   return `This action returns all loginUser`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} loginUser`;
  // }

  // update(id: number, updateLoginUserDto: UpdateLoginUserDto) {
  //   return `This action updates a #${id} loginUser`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} loginUser`;
  // }

 async loginUser(createLoginUserDto: CreateLoginUserDto){
    console.log(createLoginUserDto);
    const email = createLoginUserDto.email;
    try {
      const registerData = await this.userModel.find({email:email})

      if (!registerData) {
        return {
          success: false,
          message: 'User login failed',
          error: 'Invalid email or password'
        };
      }

      // compare password
      const isPasswordMatch = await bcrypt.compare(createLoginUserDto.password, registerData[0].password);

      // create JWT
      const jwt = await this.jwtService.sign({ email: registerData[0].email, id: registerData[0]._id });

      // add jwt inside the database
      // registerData.jwt = jwt;
      await this.userModel.updateOne({email:email},{jwt:jwt});

      console.log(registerData);
           
    } catch (error) {
       return {
        message: 'Error occur While Login',
        error: error
       }
    }
    
 }



}
