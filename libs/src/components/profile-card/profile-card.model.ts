import { NavlinkConfig } from '../../widgets/navlink/navlink.model';

export enum ProfileCardSize {
  Small,
  Medium, 
  Large,
}

export interface ProfileCardConfig {
  profileCardSize: ProfileCardSize
  profilePicUrl?: string
  firstName: string,
  lastName: string,
  profileContent: string[]
  clickRoute?: NavlinkConfig
}