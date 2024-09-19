import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisterUserService } from './register-user.service';
import { CreateRegisterUserDto } from './dto/create-register-user.dto';
import { UpdateRegisterUserDto } from './dto/update-register-user.dto';
import { RegisterUser } from './schemas/register-user.schema';

@Controller('api/v1/user')
export class RegisterUserController {
  constructor(private readonly registerUserService: RegisterUserService) {}

  @Post("register")
  create(@Body() registerData: RegisterUser) {
    return this.registerUserService.createUser(registerData);
  }

  

}
