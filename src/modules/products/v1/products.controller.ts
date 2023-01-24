import { Controller, Get } from '@nestjs/common';

@Controller({
  path: 'products',
  version: '1',
})
export class ProductController {
  constructor() {
    //
  }

  @Get()
  products(): string {
    return 'Hello From Products';
  }
}
