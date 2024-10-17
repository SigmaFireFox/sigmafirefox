import { ButtonConfig } from '../../widgets/button/button.model';
import { FieldConfig } from "../field/field.model";

export interface FormField {
  name: string
  config: FieldConfig
}

export interface FormButton {
  config: ButtonConfig
  isSubmit?: boolean

}
export interface FormConfig {
  fields: FormField[]
  buttons: FormButton[]
}