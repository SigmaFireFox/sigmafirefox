import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormButton,
  FormButtonAlignment,
  SingleColumnFormConfig,
  FormField,
} from '../forms.model';
import { FieldComponent } from '../../field/field.component';
import { ButtonComponent } from '../../../widgets/button/button.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sff-single-column-form',
  standalone: true,
  imports: [CommonModule, FieldComponent, ButtonComponent],
  templateUrl: './single-column-form.component.html',
  styleUrl: './single-column-form.component.scss',
})
export class SingleColumnFormComponent implements OnInit {
  @Input() config: SingleColumnFormConfig | undefined;
  @Output() formSubmitted: EventEmitter<FormGroup> = new EventEmitter();

  form: FormGroup | undefined;
  customStyling: { [key: string]: string } = {};

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    if (!this.config) return;
    this.form = this.formBuilder.group({});
    for (const field of this.config.fields) {
      this.form.addControl(field.name, new FormControl(''));
    }

    let display = '';
    let justifyContent = '';
    switch (this.config.buttons[0].alignment) {
      case FormButtonAlignment.Left: {
        display = 'flex';
        justifyContent = 'flex-start';
        break;
      }
      case FormButtonAlignment.Centre: {
        display = 'flex';
        justifyContent = 'center';
        break;
      } 
      case FormButtonAlignment.Right: {
        display = 'flex';
        justifyContent = 'flex-end';
        break;
      }    }

    this.customStyling = {
      display: display,
      'justify-content': justifyContent,
    };
  }

  onFieldValueUpdate(field: FormField, value: string) {
    if (!this.form) return;
    this.form.controls[field.name].setValue(value);
  }

  onButtonClicked(button: FormButton) {
    if (button.isSubmit && this.form) {
      this.formSubmitted.emit(this.form);
    }
  }
}
