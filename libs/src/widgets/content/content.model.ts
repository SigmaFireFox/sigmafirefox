export enum ContentFontSize {
  Small,
  Medium,
  Large
}

export interface ContentConfig {
  size: ContentFontSize
  content: string[]
  isNavLink?: boolean
}