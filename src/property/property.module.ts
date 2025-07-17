import { Module, ValidationPipe } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { APP_PIPE } from '@nestjs/core';

@Module({
  providers: [
    //   {
    //   provide: APP_PIPE,
    //   useValue: new ValidationPipe({
    //     whitelist: true,
    //     forbidNonWhitelisted: true,
    //     transform: true,
    //     transformOptions: {
    //       enableImplicitConversion: true
    //     }
    //   })
    // }
  ],
  controllers: [PropertyController]
})
export class PropertyModule { }
