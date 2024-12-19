import { IconConfig } from '../../widgets/icon/icon.model';
import { NavlinkConfig } from '../../widgets/navlink/navlink.model';

export interface NavigationMenuItem {
  icon: string;
  description: string;
  route: string;
  children?: NavigationMenuItem[];
}

export interface NavigationMenuItemConfig {
  icon: IconConfig;
  navlink: NavlinkConfig;
  showChildren: boolean;
  children: NavigationMenuItemConfig[];
}
