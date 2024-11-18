import { IconConfig } from '../../widgets/icon/icon.model';
import { NavlinkConfig } from '../../widgets/navlink/navlink.model';

export interface NavigationMenuConfig {
  items: NavigationMenuItem[]
}

export interface NavigationMenuItem {
  icon: IconConfig;
  navlink: NavlinkConfig;
  children: NavigationMenuItem[];
}
