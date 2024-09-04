import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterUserModule } from './register-user/register-user.module';

@Module({
  imports: [RegisterUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
