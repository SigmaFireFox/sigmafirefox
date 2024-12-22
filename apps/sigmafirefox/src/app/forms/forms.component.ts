import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  FormRowComponent,
  MultipleColumnFormComponent,
  SingleColumnFormComponent,
} from '@sigmafirefox/components';
import { MockSingleColumnFormConfig } from './configs/single-column-form.config';
import { MockFormRowConfigs } from './configs/form-row.config';
import { MockMultipleColumnFormConfig } from './configs/multiple-column-form.config';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    CommonModule,
    SingleColumnFormComponent,
    MultipleColumnFormComponent,
    FormRowComponent,
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  singleColumnFormConfig = MockSingleColumnFormConfig;
  formRowConfigs = MockFormRowConfigs
  multipleColumnFormConfig = MockMultipleColumnFormConfig

  onFormSubmitted(form: FormGroup) {
    console.log('Form submitted');
    console.log(form.value);
  }
}
