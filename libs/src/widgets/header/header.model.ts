export enum HeaderFontSize {
  Small,
  Medium,
  Large
}

export interface HeaderConfig {
  size: HeaderFontSize
  content: string
  skipMargin?: boolean
}