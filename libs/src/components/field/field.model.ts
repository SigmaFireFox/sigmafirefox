export enum FieldType {
  Input,
  Textarea,
}

export enum LabelPosition {
  Internal,
  External,
}
export interface FieldConfig {
  type: FieldType;
  label: string;
  labelPosition: LabelPosition;
}
