import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginUserService } from './login-user.service';
import { CreateLoginUserDto } from './dto/create-login-user.dto';
import { UpdateLoginUserDto } from './dto/update-login-user.dto';

@Controller('login-user')
export class LoginUserController {
  constructor(private readonly loginUserService: LoginUserService) {}

  @Post("login")
  create(@Body() loginUserDto: CreateLoginUserDto){
    return this.loginUserService.loginUser(loginUserDto);
  }

  // @Get()
  // findAll() {
  //   return this.loginUserService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.loginUserService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLoginUserDto: UpdateLoginUserDto) {
  //   return this.loginUserService.update(+id, updateLoginUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.loginUserService.remove(+id);
  // }
}
