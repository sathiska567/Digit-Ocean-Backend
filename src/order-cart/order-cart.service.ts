import { Injectable } from '@nestjs/common';
import { CreateOrderCartDto } from './dto/create-order-cart.dto';
import { UpdateOrderCartDto } from './dto/update-order-cart.dto';

@Injectable()
export class OrderCartService {
  create(createOrderCartDto: CreateOrderCartDto) {
    return 'This action adds a new orderCart';
  }

  findAll() {
    return `This action returns all orderCart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderCart`;
  }

  update(id: number, updateOrderCartDto: UpdateOrderCartDto) {
    return `This action updates a #${id} orderCart`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderCart`;
  }
}
