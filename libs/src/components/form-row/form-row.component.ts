import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRowConfig } from './form-row.model';
import { FieldComponent } from '../field/field.component';

@Component({
  selector: 'sff-form-row',
  standalone: true,
  imports: [CommonModule, FieldComponent],
  templateUrl: './form-row.component.html',
  styleUrl: './form-row.component.scss',
})
export class FormRowComponent {
  @Input() config: FormRowConfig | undefined
}
