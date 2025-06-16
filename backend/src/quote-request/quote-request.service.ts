import { Injectable } from '@nestjs/common';
import { quoteRequestData } from './mock/quote-request.mock';
import { CreatePilotDto } from './dto/create-pilot.dto';

@Injectable()
export class QuoteRequestService {
  private data = quoteRequestData;

  getQuoteRequestData() {
    return this.data;
  }

  addPilot(dto: CreatePilotDto) {
    const newId = this.data.pilots.length + 1;
    const newPilot = { id: newId, ...dto };
    this.data.pilots.push(newPilot);
    return { message: 'Pilot added successfully', pilot: newPilot };
  }
}
