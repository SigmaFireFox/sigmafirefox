import {
  FormRowConfig,
  FieldType,
  LabelPosition,
} from '@sigmafirefox/components';

export const MockFormRowConfigs: FormRowConfig[] = [
  {
    columns: 2,
    fields: [
      {
        name: 'row1_field1',
        config: {
          type: FieldType.Input,
          label: 'An input field - External label',
          labelPosition: LabelPosition.External,
        },
      },
      {
        name: 'row1_field2',
        config: {
          type: FieldType.Textarea,
          label: 'An textarea field - External label',
          labelPosition: LabelPosition.External,
        },
      },
    ],
  },
  {
    columns: 3,
    fields: [
      {
        name: 'row2_field1',
        config: {
          type: FieldType.Input,
          label: 'An input field - External label',
          labelPosition: LabelPosition.External,
        },
      },
      {
        name: 'row2_field2',
        config: {
          type: FieldType.Textarea,
          label: 'An textarea field - External label',
          labelPosition: LabelPosition.External,
        },
      },
      {
        name: 'row2_field3',
        config: {
          type: FieldType.Input,
          label: 'An input field - External label',
          labelPosition: LabelPosition.External,
        },
      },
    ],
  },
  {
    columns: 3,
    fields: [
      {
        name: 'row3_field1',
        config: {
          type: FieldType.Input,
          label: 'An input field - External label',
          labelPosition: LabelPosition.External,
        },
      },
      {
        name: 'row3_field2',
        config: {
          type: FieldType.Input,
          label: 'An input field - External label',
          labelPosition: LabelPosition.External,
        },
      },
      {
        name: 'row3_field3',
        config: {
          type: FieldType.Input,
          label: 'An input field - External label',
          labelPosition: LabelPosition.External,
        },
      },
    ],
  },
  {
    columns: 2,
    fields: [
      {
        name: 'row4_field1',
        config: {
          type: FieldType.Textarea,
          label: 'An textarea field - External label',
          labelPosition: LabelPosition.External,
        },
      },
      {
        name: 'row4_field2',
        config: {
          type: FieldType.Textarea,
          label: 'An textarea field - External label',
          labelPosition: LabelPosition.External,
        },
      },
    ],
  },
];
