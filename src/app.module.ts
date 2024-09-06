import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterUserModule } from './register-user/register-user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { LoginUserModule } from './login-user/login-user.module';


@Module({
  // imports: [RegisterUserModule],
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true
    }),

    MongooseModule.forRoot(process.env.MONGO_URL),
  
    // // register the jwt service
    // JwtModule.registerAsync({
    //   useFactory: async() => ({
    //     secret: process.env.JWT_SECRET,
    //     signOptions: {
    //       expiresIn: '60s',
    //     },
    //   }),
    // }),

    RegisterUserModule,
  
    LoginUserModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
