import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormConfig } from './form.model';
import { FieldComponent } from '../field/field.component';
import { ButtonComponent } from '../../widgets/button/button.component';

@Component({
  selector: 'sff-form',
  standalone: true,
  imports: [CommonModule, FieldComponent, ButtonComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Input() config: FormConfig | undefined;
}
