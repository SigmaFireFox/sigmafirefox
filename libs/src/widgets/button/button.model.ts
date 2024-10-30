export enum ButtonSize {
  Small,
  Medium,
  Large,
  CTA_Small,
  CTA_Medium,
  CTA_Large,
}

export enum ButtonType {
  Primary,
  Secondary,
}

export interface ButtonConfig {
  name: string;
  text: string;
  type: ButtonType;
  size: ButtonSize;
}
