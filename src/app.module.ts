import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UsersController } from './users/users.controller';
import { DbModule } from './db/db.module';
// import configuration from './config/configuration';
import appConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      //   load: [configuration],
      load: [appConfig],
    }),
    DbModule,
  ],
  //   controllers: [UsersController],
  //   controllers: [AppController, UsersController],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
