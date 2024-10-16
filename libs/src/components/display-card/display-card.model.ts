import { IconConfig } from '../../widgets/icon/icon.model';
import { ContentConfig } from '../../widgets/content/content.model';
import { HeaderConfig } from '../../widgets/header/header.model';
import { StarRaterConfig } from '../star-rater/star-rater.model';

export enum DisplayCardSize {
  Small,
  Medium,
  Large,
}

export enum DisplayCardContentType {
  Icon,
  Header,
  Content,
  StarRater,
}

export interface DisplayCardContent {
  type: DisplayCardContentType;
  iconContent?: IconConfig;
  headerConfig?: HeaderConfig;
  contentConfig?: ContentConfig;
  starRaterConfig?: StarRaterConfig;
}

export interface DisplayCardConfig {
  size: DisplayCardSize;
  content: DisplayCardContent[];
  isTransparent?: boolean;
}
