import { Module } from '@nestjs/common';
// import { join } from 'path';
// import { ServeStaticModule } from '@nestjs/serve-static';

import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './modules/products';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '../..', 'public'),
    // }),
    ProductsModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  //
}
