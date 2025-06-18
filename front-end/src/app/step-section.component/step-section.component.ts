import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-section',
  standalone: true,
  imports: [CommonModule],  // ⬅️ Required for ngIf, ngFor, ngClass, etc.
  templateUrl: './step-section.component.html',
  styleUrls: ['./step-section.component.css']
})
export class StepSectionComponent {
  @Input() stepTitle!: string;
  @Input() status!: string;
  @Input() statusColor!: string;
  @Input() items: { name: string; status: string }[] = [];
  @Input() icon!: string;
}
