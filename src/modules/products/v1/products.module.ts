import { Module } from '@nestjs/common';
import { ProductController } from './products.controller';

@Module({
  imports: [],
  controllers: [ProductController],
})
export class ProductsModule {
  //
}
