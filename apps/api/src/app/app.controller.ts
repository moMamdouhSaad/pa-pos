import { Controller, Get, Param, Res } from '@nestjs/common';

import { Message } from '@pa-pos/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  public constructor(private readonly appService: AppService) {}

  @Get('hello')
  public getData(): Message {
    return this.appService.getData();
  }

  @Get('img/:imgpath')
  public seeUploadedFile(@Param('imgpath') image, @Res() res): any {
    return res.sendFile(image, { root: './files' });
  }
}
