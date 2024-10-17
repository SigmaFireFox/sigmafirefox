import { ButtonConfig } from '../../widgets/button/button.model';
import { FieldConfig } from "../field/field.model";

export interface FormConfig {
  fields: FieldConfig[]
  buttons: ButtonConfig[]
}