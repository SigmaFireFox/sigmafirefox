import { ButtonConfig } from '../../widgets/button/button.model';
import { FieldConfig } from "../field/field.model";
import { FormRowConfig } from '../form-row/form-row.model';

export enum FormButtonAlignment {
  Left,
  Centre,
  Right,
  Full,
}

export interface FormField {
  name: string
  config: FieldConfig
}

export interface FormFieldValue {
  field: FormField,
  value: string
}

export interface FormButton {
  config: ButtonConfig
  isSubmit?: boolean
  alignment: FormButtonAlignment
}
export interface SingleColumnFormConfig {
  fields: FormField[]
  buttons: FormButton[]
}

export interface MultipleColumnFormConfig {
  rows: FormRowConfig[]
  buttons: FormButton[]
}