import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import type { Product as ProductModel } from '@prisma/client';

@Controller({
  path: 'products',
  version: '1',
})
export class ProductController {
  constructor(private readonly productsService: ProductsService) {
    //
  }

  @Get()
  async findAll(): Promise<ProductModel[]> {
    try {
      return await this.productsService.findAll({});
    } catch (error) {
      return error;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductModel> {
    try {
      return await this.productsService.findOne({ id: +id });
    } catch (error) {
      return error;
    }
  }
}
