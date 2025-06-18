// src/app/quote-request/quote-request.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepSectionComponent } from '../step-section.component/step-section.component';
import { quoteSections } from '../mockData';

@Component({
  selector: 'app-quote-request',
  standalone: true,
  imports: [CommonModule, StepSectionComponent],
  templateUrl: './quote-request.component.html'
})
export class QuoteRequestComponent {
  quoteSections = quoteSections
}
