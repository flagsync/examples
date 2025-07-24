import { FsUserContext } from '@flagsync/nestjs-sdk';
import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { UserContext } from './context.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getValue(@UserContext() context: FsUserContext) {
    return this.appService.doWork(context);
  }
}
