import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderCartDto } from './create-order-cart.dto';

export class UpdateOrderCartDto extends PartialType(CreateOrderCartDto) {}
