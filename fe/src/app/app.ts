// src/app/app.ts
import { Component } from '@angular/core';
import { QuoteRequestComponent } from './quote-request.component/quote-request.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuoteRequestComponent],
  template: '<app-quote-request />'
})
export class App {}
