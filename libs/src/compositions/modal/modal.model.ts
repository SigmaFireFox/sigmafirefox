import { FormConfig } from '../../components/form/form.model';
import { StarRaterConfig } from '../../components/star-rater/star-rater.model';
import { ContentConfig } from '../../widgets/content/content.model';
import { HeaderConfig } from '../../widgets/header/header.model';
import { IconConfig } from '../../widgets/icon/icon.model';

export enum ModalHorizontalAlignment {
  Left,
  CenterLeft,
  Center,
  CenterRight,
  Right,
}

export enum ModalVerticalAlignment {
  Top,
  CenterTop,
  Center,
  CenterBottom,
  Bottom,
}

export enum ModalSize {
  Small,
  Medium,
  Large,
}

export enum ModalContentType {
  Icon,
  Header,
  Content,
  Form,
  StarRater,
}

export interface ModalContent {
  type: ModalContentType;
  iconContent?: IconConfig;
  headerConfig?: HeaderConfig;
  contentConfig?: ContentConfig;
  formConfig?: FormConfig;
  starRaterConfig?: StarRaterConfig;
}

export interface ModalConfig {
  size: ModalSize;
  content: ModalContent[];
  horizontalAlignment: ModalHorizontalAlignment
  verticalAlignment: ModalVerticalAlignment
}