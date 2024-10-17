import { Component } from '@angular/core';
import {
  FieldType,
  FormComponent,
  FormConfig,
  LabelPosition,
} from '@sigmafirefox/components';
import { ButtonSize, ButtonType } from '@sigmafirefox/widgets';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  formConfig: FormConfig = {
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
      {
        type: FieldType.Input,
        label: 'An input field - Internal label',
        labelPosition: LabelPosition.Internal,
      },
      {
        type: FieldType.Textarea,
        label: 'An textarea field - Internal label',
        labelPosition: LabelPosition.Internal,
      },
    ],
    buttons: [
      {
        name: 'button',
        text: 'Primary Large (100%) of available width',
        type: ButtonType.Primary,
        size: ButtonSize.Large,
      },
    ],
  };
}
