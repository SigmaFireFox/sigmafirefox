import { NavlinkConfig } from '../../widgets/navlink/navlink.model';
import { LogoConfig } from '../logo/logo.model';
import { ProfileCardConfig } from '../profile-card/profile-card.model';

export interface NavbarConfig {
  logo: LogoConfig;
  navlinks: NavlinkConfig[];
  profileCard?: ProfileCardConfig
}
