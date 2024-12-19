import { IconConfig } from '../../widgets/icon/icon.model';
import { NavlinkConfig } from '../../widgets/navlink/navlink.model';

export interface NavigationMenuConfig {
  menuItems: NavigationMenuItemConfig[]
  isIconsOnly: boolean
}

export interface NavigationMenuItemConfig {
  icon: string;
  description: string;
  route: string;
  children?: NavigationMenuItemConfig[];
}

export interface NavigationMenuItem {
  icon: IconConfig;
  navlink: NavlinkConfig;
  showChildren: boolean;
  children: NavigationMenuItem[];
}
