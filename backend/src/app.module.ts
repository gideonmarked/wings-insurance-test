import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuoteRequestModule } from './quote-request/quote-request.module';

@Module({
  imports: [QuoteRequestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
