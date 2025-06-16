import { Insured } from '../interfaces/insured.interface';
import { Aircraft } from '../interfaces/aircraft.interface';
import { Pilot } from '../interfaces/pilot.interface';

export const quoteRequestData: {
  insured: Insured;
  aircraft: Aircraft[];
  pilots: Pilot[];
} = {
  insured: {
    name: 'John Doe',
    status: 'complete',
  },
  aircraft: [
    {
      id: 1,
      registration: 'N123AB',
      model: '787-9 Dreamliner',
      status: 'complete',
    },
  ],
  pilots: [
    {
      id: 1,
      name: 'Pedro Morais',
      status: 'pending',
    },
    {
      id: 2,
      name: 'John Doe',
      status: 'updated',
    },
  ],
};
