import { Module } from '@nestjs/common';
import { OrderCartService } from './order-cart.service';
import { OrderCartController } from './order-cart.controller';

@Module({
  controllers: [OrderCartController],
  providers: [OrderCartService],
})
export class OrderCartModule {}
