import { Module } from '@nestjs/common';
import { RegisterUserService } from './register-user.service';
import { RegisterUserController } from './register-user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterUserSchema } from './schemas/register-user.schema';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
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
  
  controllers: [RegisterUserController],
  providers: [RegisterUserService],
})
export class RegisterUserModule {}
