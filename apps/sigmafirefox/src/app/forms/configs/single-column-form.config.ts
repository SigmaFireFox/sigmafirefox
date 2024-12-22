import {
  SingleColumnFormConfig,
  FieldType,
  LabelPosition,
  FormButtonAlignment,
} from '@sigmafirefox/components';
import { ButtonType, ButtonSize } from '@sigmafirefox/widgets';

export const SingleColumnFormConfig: SingleColumnFormConfig = {
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
