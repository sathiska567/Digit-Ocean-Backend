import { Module } from '@nestjs/common';
import { LoginUserService } from './login-user.service';
import { LoginUserController } from './login-user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterUserSchema } from 'src/register-user/schemas/register-user.schema';
import { JwtModule } from '@nestjs/jwt';


@Module({
    imports:[
      MongooseModule.forFeature([{ name: 'registerUser', schema: RegisterUserSchema }]),

      JwtModule.registerAsync({
        useFactory: async() => ({
          secret: process.env.JWT_SECRET,
          signOptions: {
            expiresIn: '60s',
          },
        }),
      }),

    ],
  controllers: [LoginUserController],
  providers: [LoginUserService],
})
export class LoginUserModule {}
