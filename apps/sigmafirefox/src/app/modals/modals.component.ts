import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  ButtonConfig,
  ButtonSize,
  ButtonType,
  HeaderFontSize,
} from '@sigmafirefox/widgets';
import {
  HorizontalAlignment,
  ModalComponent,
  ModalConfig,
  ModalContentType,
  ModalSize,
  VerticalAlignment,
} from '@sigmafirefox/compositions';
import { FieldType, LabelPosition } from '@sigmafirefox/components';

@Component({
  selector: 'app-modals',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ModalComponent],
  templateUrl: './modals.component.html',
  styleUrl: './modals.component.scss',
})
export class ModalsComponent {
  showModalForm = false;

  modalFormButton: ButtonConfig = {
    name: 'modalFormButton',
    text: 'Modal Form',
    type: ButtonType.Primary,
    size: ButtonSize.Small,
  };

  modalFormConfig: ModalConfig = {
    size: ModalSize.Medium,
    content: [
      {
        type: ModalContentType.Header,
        headerConfig: {
          size: HeaderFontSize.Medium,
          content: 'Contact us'
        }
      },
      {
        type: ModalContentType.Form,
        formConfig: {
          fields: [
            {
              name: 'name',
              config: {
                label: 'Name',
                labelPosition: LabelPosition.External,
                type: FieldType.Input,
              },
            },
            {
              name: 'Email',
              config: {
                label: 'Email',
                labelPosition: LabelPosition.External,
                type: FieldType.Input,
              },
            },
            {
              name: 'message',
              config: {
                label: 'Message',
                labelPosition: LabelPosition.External,
                type: FieldType.Textarea,
              },
            },
          ],
          buttons: [],
        },
      },
    ],
    horizontalAlignment: HorizontalAlignment.Center,
    verticalAlignment: VerticalAlignment.Center,
  };
}
