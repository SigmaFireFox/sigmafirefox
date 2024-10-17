import { ContentConfig } from '../../widgets/content/content.model';
import { NavlinkConfig } from '../../widgets/navlink/navlink.model';

export interface FooterConfig {
  navlinks: NavlinkConfig[];
  content: ContentConfig;
}
