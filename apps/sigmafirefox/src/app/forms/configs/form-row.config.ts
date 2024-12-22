import { FormRowConfig, FieldType, LabelPosition } from "@sigmafirefox/components";

export const   MockFormRowConfigs: FormRowConfig[] = [
    {
      columns: 2,
      fields: [
        {
          name: 'field1',
          config: {
            type: FieldType.Input,
            label: 'An input field - External label',
            labelPosition: LabelPosition.External,
          },
        },
        {
          name: 'field2',
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
          name: 'field2',
          config: {
            type: FieldType.Input,
            label: 'An input field - External label',
            labelPosition: LabelPosition.External,
          },
        },
        {
          name: 'field2',
          config: {
            type: FieldType.Textarea,
            label: 'An textarea field - External label',
            labelPosition: LabelPosition.External,
          },
        },
        {
          name: 'field2',
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
          name: 'field2',
          config: {
            type: FieldType.Input,
            label: 'An input field - External label',
            labelPosition: LabelPosition.External,
          },
        },
        {
          name: 'field2',
          config: {
            type: FieldType.Input,
            label: 'An input field - External label',
            labelPosition: LabelPosition.External,
          },
        },
        {
          name: 'field2',
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
          name: 'field2',
          config: {
            type: FieldType.Textarea,
            label: 'An textarea field - External label',
            labelPosition: LabelPosition.External,
          },
        },
        {
          name: 'field2',
          config: {
            type: FieldType.Textarea,
            label: 'An textarea field - External label',
            labelPosition: LabelPosition.External,
          },
        },
      ],
    },
  ];