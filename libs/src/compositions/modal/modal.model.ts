import { ButtonConfig } from '../../widgets/button/button.model';
import { SingleColumnFormConfig } from '../../components/forms/forms.model';
import { StarRaterConfig } from '../../components/star-rater/star-rater.model';
import { ContentConfig } from '../../widgets/content/content.model';
import { HeaderConfig } from '../../widgets/header/header.model';
import { IconConfig } from '../../widgets/icon/icon.model';

export enum HorizontalAlignment {
  Left = 'flex-start',
  Center = 'center',
  Right = 'flex-end',
}

export enum VerticalAlignment {
  Top = 'flex-start',
  Center = 'center',
  Bottom = 'flex-end',
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
  Buttons,
}

export interface ModalContent {
  type: ModalContentType;
  iconContent?: IconConfig;
  headerConfig?: HeaderConfig;
  contentConfig?: ContentConfig;
  formConfig?: SingleColumnFormConfig;
  starRaterConfig?: StarRaterConfig;
  buttonsConfig?: ButtonConfig[];
}

export interface ModalConfig {
  size: ModalSize;
  content: ModalContent[];
  isOnlyInfo?: boolean
  horizontalAlignment: HorizontalAlignment;
  verticalAlignment: VerticalAlignment;
}
