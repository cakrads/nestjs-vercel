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
    return this.productsService.findAll({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductModel> {
    return this.productsService.findOne({ id: +id });
  }
}
