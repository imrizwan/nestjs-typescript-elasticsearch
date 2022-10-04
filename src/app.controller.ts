import { Controller, Get, Render, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(): object {
    return this.appService.getHello();
  }

  @Post()
  search(): object {
    return this.appService.search();
  }
}
