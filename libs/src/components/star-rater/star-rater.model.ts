export interface StarRaterConfig {
  rating: number
  color?: string
  size: StarSize
}

export enum StarSize {
  Small,
  Medium,
  Large,
}

export interface StarArrays {
  fullStars: string[]
  halfStars: string[]
  emptyStars: string[]

}