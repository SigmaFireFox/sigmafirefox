import { NavlinkConfig } from '../../widgets/navlink/navlink.model';
import { LogoConfig } from '../logo/logo.model';

export interface NavbarConfig {
  logo: LogoConfig;
  navlinks: NavlinkConfig[];
}
