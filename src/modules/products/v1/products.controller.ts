import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';

import type { Product as ProductModel } from '@prisma/client';

@Controller({
  path: 'products',
  version: '1',
})
@ApiTags('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {
    //
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  async findAll(): Promise<ProductModel[]> {
    return this.productsService.findAll({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductModel> {
    return this.productsService.findOne({ id: +id });
  }

  @Patch(':id')
  async update2(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
