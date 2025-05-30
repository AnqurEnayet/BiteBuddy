import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [SignupModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
