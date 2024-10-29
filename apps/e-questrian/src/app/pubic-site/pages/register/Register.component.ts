import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSize, ButtonType, ImageComponent, ImageConfig } from '@sigmafirefox/widgets';
import { FormGroup } from '@angular/forms';
import { FormConfig, FieldType, LabelPosition, FormComponent } from '@sigmafirefox/components';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ImageComponent, FormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  imageConfig: ImageConfig = {
    url: 'register-side-image.png',
    alt: 'Register page side image',
    height: '100%',
    width: '50%',
    left: '50%'
  };

  formConfig: FormConfig = {
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
      },
    ],
  };

  onFormSubmitted(form: FormGroup){
    console.log('Form submitted')
    console.log(form.value)
  }
}
