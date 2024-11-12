import { NavlinkConfig } from '../../widgets/navlink/navlink.model';

export interface ProfileCardConfig {
  profilePicUrl?: string
  firstName: string,
  lastName: string,
  emailAddress: string
  clickRoute?: NavlinkConfig
}