import { Controller, Get, Post, Body } from '@nestjs/common';
import { QuoteRequestService } from './quote-request.service';
import { CreatePilotDto } from './dto/create-pilot.dto';

@Controller('quote-request')
export class QuoteRequestController {
  constructor(private readonly service: QuoteRequestService) {}

  @Get()
  getQuoteRequest() {
    return this.service.getQuoteRequestData();
  }

  @Post('pilots')
  addPilot(@Body() createPilotDto: CreatePilotDto) {
    return this.service.addPilot(createPilotDto);
  }
}