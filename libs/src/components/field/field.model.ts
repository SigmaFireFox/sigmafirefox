export enum FieldType {
  Input,
  Textarea
}

export interface FieldConfig {
  type: FieldType
  label: string
}