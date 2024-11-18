import { IconConfig } from '../../widgets/icon/icon.model';
import { NavlinkConfig } from '../../widgets/navlink/navlink.model';

export interface NavigationMenu {
  items: NavigationMenuItem[]
}

export interface NavigationMenuItem {
  icon: string,
  description: string,
  route: string
  children?: NavigationMenuItem[]
}

export interface NavigationMenuConfig {
  items: NavigationMenuConfigItem[]
}

export interface NavigationMenuConfigItem {
    icon: IconConfig;
    navlink: NavlinkConfig
}


