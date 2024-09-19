import { Test, TestingModule } from '@nestjs/testing';
import { OrderCartController } from './order-cart.controller';
import { OrderCartService } from './order-cart.service';

describe('OrderCartController', () => {
  let controller: OrderCartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderCartController],
      providers: [OrderCartService],
    }).compile();

    controller = module.get<OrderCartController>(OrderCartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
