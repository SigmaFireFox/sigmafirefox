import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  FieldType,
  FormButtonAlignment,
  FormComponent,
  FormConfig,
  FormRowComponent,
  FormRowConfig,
  LabelPosition,
} from '@sigmafirefox/components';
import { ButtonSize, ButtonType } from '@sigmafirefox/widgets';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormComponent, FormRowComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  singleColumnFormConfig: FormConfig = {
    fields: [
      {
        name: 'Field1',
        config: {
          type: FieldType.Input,
          label: 'An input field - External label',
          labelPosition: LabelPosition.External,
        },
      },
      {
        name: 'Field2',
        config: {
          type: FieldType.Textarea,
          label: 'An textarea field - External label',
          labelPosition: LabelPosition.External,
        },
      },
      {
        name: 'Field3',
        config: {
          type: FieldType.Input,
          label: 'An input field - Internal label',
          labelPosition: LabelPosition.Internal,
        },
      },
      {
        name: 'Field4',
        config: {
          type: FieldType.Textarea,
          label: 'An textarea field - Internal label',
          labelPosition: LabelPosition.Internal,
        },
      },
    ],
    buttons: [
      {
        config: {
          name: 'button',
          text: 'Primary Large (100%) of available width',
          type: ButtonType.Primary,
          size: ButtonSize.Large,
        },
        isSubmit: true,
        alignment: FormButtonAlignment.Full,
      },
    ],
  };

  formRowConfig: FormRowConfig = {
    columns: 2,
    fields: [
      {
        type: FieldType.Input,
        label: 'An input field - External label',
        labelPosition: LabelPosition.External,
      },
      {
        type: FieldType.Textarea,
        label: 'An textarea field - External label',
        labelPosition: LabelPosition.External,
      },
    ],
  };

  onFormSubmitted(form: FormGroup) {
    console.log('Form submitted');
    console.log(form.value);
  }
}
