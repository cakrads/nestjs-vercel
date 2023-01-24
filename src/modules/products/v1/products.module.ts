import { Module } from '@nestjs/common';

import { PrismaModule } from './../../../prisma/prisma.module';
import { ProductController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  controllers: [ProductController],
  providers: [ProductsService],
  imports: [PrismaModule],
})
export class ProductsModule {
  //
}
