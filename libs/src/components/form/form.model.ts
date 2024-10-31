import { ButtonConfig } from '../../widgets/button/button.model';
import { FieldConfig } from "../field/field.model";

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

export interface FormButton {
  config: ButtonConfig
  isSubmit?: boolean
  alignment: FormButtonAlignment
}
export interface FormConfig {
  fields: FormField[]
  buttons: FormButton[]
}