import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderCartService } from './order-cart.service';
import { CreateOrderCartDto } from './dto/create-order-cart.dto';
import { UpdateOrderCartDto } from './dto/update-order-cart.dto';

@Controller('order-cart')
export class OrderCartController {
  constructor(private readonly orderCartService: OrderCartService) {}

  @Post()
  create(@Body() createOrderCartDto: CreateOrderCartDto) {
    return this.orderCartService.create(createOrderCartDto);
  }

  @Get()
  findAll() {
    return this.orderCartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderCartService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderCartDto: UpdateOrderCartDto) {
    return this.orderCartService.update(+id, updateOrderCartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderCartService.remove(+id);
  }
}
