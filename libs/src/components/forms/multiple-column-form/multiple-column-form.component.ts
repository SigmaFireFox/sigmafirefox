import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormButton,
  FormButtonAlignment,
  FormFieldValue,
  MultipleColumnFormConfig,
} from '../forms.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { FormRowComponent } from '../../form-row/form-row.component';
import { ButtonComponent } from '../../../widgets/button/button.component';

@Component({
  selector: 'sff-multiple-column-form',
  standalone: true,
  imports: [CommonModule, FormRowComponent, ButtonComponent],
  templateUrl: './multiple-column-form.component.html',
  styleUrl: './multiple-column-form.component.scss',
})
export class MultipleColumnFormComponent implements OnInit {
  @Input() config: MultipleColumnFormConfig | undefined;
  @Output() formSubmitted: EventEmitter<FormGroup> = new EventEmitter();

  form: FormGroup | undefined;
  customStyling: { [key: string]: string } = {};

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.setForm()
    this.setCustomStyling()
    this.setIsViewOnlyState()
  }

  private setForm(){
    if (!this.config) return;
    this.form = this.formBuilder.group({});
    for (const row of this.config.rows) {
      for (const field of row.fields) {
        this.form.addControl(field.name, new FormControl(''));
      }
    }
  }

  private setCustomStyling(){
    if (!this.config) return;

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
      }
    }

    this.customStyling = {
      display: display,
      'justify-content': justifyContent,
    };
  }

  setIsViewOnlyState(){
    if (!this.config) return;

    if (this.config.isViewOnly) {
      this.config.rows.forEach(row => {
        row.fields.forEach(field => {
          field.config.isViewOnly = true
        })
      })
    }
  }

  onFormFieldValueUpdate(formFieldValue: FormFieldValue) {
    if (!this.form) return;
    this.form.controls[formFieldValue.field.name].setValue(
      formFieldValue.value
    );
  }

  onButtonClicked(button: FormButton) {
    if (button.isSubmit && this.form) {
      this.formSubmitted.emit(this.form);
    }
  }
}
