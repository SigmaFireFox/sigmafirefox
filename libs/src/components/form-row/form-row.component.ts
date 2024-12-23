import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRowConfig } from './form-row.model';
import { FieldComponent } from '../field/field.component';
import { FormField, FormFieldValue } from '../forms/forms.model';

@Component({
  selector: 'sff-form-row',
  standalone: true,
  imports: [CommonModule, FieldComponent],
  templateUrl: './form-row.component.html',
  styleUrl: './form-row.component.scss',
})
export class FormRowComponent {
  @Input() config: FormRowConfig | undefined;
  @Output() updatedValue: EventEmitter<FormFieldValue> = new EventEmitter();

  onFieldValueUpdate(field: FormField, value: string) {
    this.updatedValue.emit({ field, value });
  }
}
