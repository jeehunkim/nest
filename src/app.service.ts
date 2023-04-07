import { Injectable, Inject } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { ConfigType } from '@nestjs/config';
import appConfig from './config/app.config';

@Injectable()
export class AppService {
  //   constructor(private configService: ConfigService) {}
  constructor(
    @Inject(appConfig.KEY)
    private config: ConfigType<typeof appConfig>,
  ) {}

  getHello(): string {
    // const host = this.configService.get<string>('app.host');
    // const port = this.configService.get<number>('app.port', 3003);
    // const dbHost = this.configService.get<string>('db.host');
    // const dbPort = this.configService.get<number>('db.port', 54344);

    // console.log(host);
    // console.log(port);
    // console.log(dbHost);
    // console.log(dbPort);

    const host = this.config.host;
    const port = this.config.port;

    console.log(host);
    console.log(port);

    return 'Hello World!!!';
  }
}
