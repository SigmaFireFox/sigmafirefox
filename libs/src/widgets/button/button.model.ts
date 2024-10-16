export enum ButtonSize {
  Small,
  Medium, 
  Large
}

export enum ButtonType {
  Primary,
  Secondary
}

export interface ButtonConfig {
  name: string
  text: string
  type: ButtonType 
  size: ButtonSize,
}